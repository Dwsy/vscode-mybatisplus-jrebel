import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as os from 'os';
import { getWelcomeHtml } from './getWelcomeHtml';

// JRebel 配置文件路径
const getJRebelConfigPath = (): string => {
    const homedir = os.homedir();
    return path.join(homedir, '.jrebel', 'jrebel.properties');
};

// JRebel 插件目录路径
const getJRebelPluginDir = (): string => {
    const homedir = os.homedir();
    return path.join(homedir, '.jrebel', 'plugins');
};

// MyBatis-Plus 插件 jar 文件路径
const getMyBatisPlusJarPath = (context: vscode.ExtensionContext): string => {
    return path.join(context.extensionPath, 'jr-mybatisplus-1.0.7.jar');
};

// 目标 MyBatis-Plus 插件路径
const getTargetMyBatisPlusJarPath = (): string => {
    const homedir = os.homedir();
    return path.join(homedir, '.jrebel', 'plugins', 'jr-mybatisplus-1.0.7.jar');
};

// 检查 JRebel 是否已安装
async function checkJRebelInstalled(): Promise<boolean> {
    const configPath = getJRebelConfigPath();
    return await fs.pathExists(configPath);
}

// 备份JRebel配置文件
async function backupJRebelConfig(): Promise<void> {
    const configPath = getJRebelConfigPath();
    if (await fs.pathExists(configPath)) {
        const backupPath = `${configPath}.backup.${new Date().getTime()}`;
        await fs.copy(configPath, backupPath);
        console.log(`备份配置文件到: ${backupPath}`);
    }
}

// 检查配置文件中是否已启用MyBatis-Plus插件
async function checkPluginEnabledFromConfig(): Promise<boolean> {
    const configPath = getJRebelConfigPath();
    if (!await fs.pathExists(configPath)) {
        return false;
    }
    const content = await fs.readFile(configPath, 'utf8');
    let pluginPath = getTargetMyBatisPlusJarPath();
    if (os.platform() === 'win32') {
        pluginPath = pluginPath.replace(/\\/g, '\\\\');
    }
    return content.split('\n').some(line => line.startsWith('rebel.plugins=') && line.includes(pluginPath));
}

// 添加插件配置到 JRebel 配置文件中
async function addPluginToJRebelConfig(enabled: boolean = true): Promise<void> {
    const configPath = getJRebelConfigPath();
    let content = '';
    if (await fs.pathExists(configPath)) {
        content = await fs.readFile(configPath, 'utf8');
    }
    let pluginPath = getTargetMyBatisPlusJarPath();
    if (os.platform() === 'win32') {
        pluginPath = pluginPath.replace(/\\/g, '\\\\');
    }
    const lines = content.split('\n');
    let rebelPluginsLineIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('rebel.plugins=')) {
            rebelPluginsLineIndex = i;
            break;
        }
    }
    if (enabled) {
        // 启用插件，避免重复添加
        if (rebelPluginsLineIndex >= 0) {
            const currentLine = lines[rebelPluginsLineIndex];
            if (!currentLine.includes(pluginPath)) {
                lines[rebelPluginsLineIndex] = `${currentLine},${pluginPath}`;
            }
        } else {
            lines.push(`rebel.plugins=${pluginPath}`);
        }
    } else {
        // 禁用插件
        if (rebelPluginsLineIndex >= 0) {
            const currentLine = lines[rebelPluginsLineIndex];
            if (currentLine.includes(pluginPath)) {
                if (currentLine === `rebel.plugins=${pluginPath}`) {
                    lines.splice(rebelPluginsLineIndex, 1);
                } else {
                    const newLine = currentLine
                        .replace(`,${pluginPath}`, '')
                        .replace(`${pluginPath},`, '')
                        .replace(`${pluginPath}`, '');
                    lines[rebelPluginsLineIndex] = newLine;
                }
            }
        }
    }
    await fs.writeFile(configPath, lines.join('\n'));
}

// 复制插件 jar 文件到 JRebel 插件目录
async function copyPluginJar(context: vscode.ExtensionContext): Promise<void> {
    const sourceJarPath = getMyBatisPlusJarPath(context);
    const targetJarPath = getTargetMyBatisPlusJarPath();
    const targetDir = getJRebelPluginDir();

    // 确保目标目录存在
    if (!await fs.pathExists(targetDir)) {
        await fs.mkdirp(targetDir);
    }

    // 复制插件 jar 文件
    await fs.copy(sourceJarPath, targetJarPath, { overwrite: true });
}

// 显示引导页面
function showWelcomePage(context: vscode.ExtensionContext) {
    const panel = vscode.window.createWebviewPanel(
        'mybatisplusWelcome',
        'Vscode Mybatisplus JRebel Plugin 配置',
        vscode.ViewColumn.One,
        {
            enableScripts: true
        }
    );
    // 动态设置开关状态
    checkPluginEnabledFromConfig().then(enabled => {
        panel.webview.html = getWelcomeHtml(enabled, os);
    });
    // 处理 Webview 中的消息
    panel.webview.onDidReceiveMessage(
        async message => {
            if (message.command === 'setup') {
                const enabled = message.enabled !== undefined ? message.enabled : true;
                await setupPlugin(context, enabled);
                // 操作后刷新页面开关状态
                const newEnabled = await checkPluginEnabledFromConfig();
                panel.webview.html = getWelcomeHtml(newEnabled, os);
            }
        },
        undefined,
        context.subscriptions
    );
}



// 设置插件
async function setupPlugin(context: vscode.ExtensionContext, enabled: boolean = true) {
    try {
        // 检查 JRebel 是否已安装
        const jrebelInstalled = await checkJRebelInstalled();
        if (!jrebelInstalled) {
            vscode.window.showErrorMessage('未检测到 JRebel 安装，请先安装 JRebel 后再配置此插件。');
            return;
        }

        // 复制插件 jar 文件
        await copyPluginJar(context);

        // 备份JRebel配置
        await backupJRebelConfig();

        // 读取当前配置，避免重复添加
        const alreadyEnabled = await checkPluginEnabledFromConfig();
        if (enabled && alreadyEnabled) {
            vscode.window.showInformationMessage('MyBatis-Plus 热加载插件已启用（无需重复配置）！');
            return;
        }
        if (!enabled && !alreadyEnabled) {
            vscode.window.showInformationMessage('MyBatis-Plus 热加载插件已禁用！');
            return;
        }

        // 更新 JRebel 配置
        await addPluginToJRebelConfig(enabled);

        if (enabled) {
            vscode.window.showInformationMessage('MyBatis-Plus 热加载插件已启用！查看JRebel日志确认成功加载。');
        } else {
            vscode.window.showInformationMessage('MyBatis-Plus 热加载插件已禁用！');
        }
    } catch (error) {
        vscode.window.showErrorMessage(`操作失败: ${error instanceof Error ? error.message : String(error)}`);
    }
}


// 插件激活
export function activate(context: vscode.ExtensionContext) {
    console.log('MyBatis-Plus 热加载插件已激活');


    let disposable = vscode.commands.registerCommand('mybatisplusJRebel.config', () => {
        showWelcomePage(context);
    });



    context.subscriptions.push(disposable);
}

// 插件停用
export function deactivate() { } 