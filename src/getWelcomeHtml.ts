// 获取欢迎页面HTML
export function getWelcomeHtml(pluginEnabled: boolean = true, os: any): string {
    const osType = os.platform() === 'win32' ? 'Windows' : 'Mac/Linux';

    // 适配VSCode暗色主题，使用CSS变量
    return `
    <!DOCTYPE html>
    <html lang="zh-CN" data-theme="vscode">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MyBatis-Plus 热加载配置</title>
        <style>
            body {
                font-family: "微软雅黑", "Microsoft YaHei", sans-serif;
                padding: 20px;
                line-height: 1.6;
                background: #20232a;
                color: #e3e6eb;
                min-height: 100vh;
            }
            h1 {
                color: #3ea6ff;
                font-size: 2em;
                margin-bottom: 12px;
                font-weight: 600;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
            }
            .step {
                margin-bottom: 20px;
                padding: 18px 20px;
                background: #23272e;
                border-radius: 10px;
                border-left: 4px solid #3ea6ff;
            }
            .btn {
                background: #3ea6ff;
                color: #fff;
                border: none;
                padding: 8px 18px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 15px;
                margin-top: 10px;
                margin-right: 10px;
                font-weight: 500;
                transition: background 0.2s;
            }
            .btn:hover {
                background: #1976d2;
            }
            .btn-disable {
                background: #444c56;
                color: #bbb;
            }
            .btn-disable:hover {
                background: #33383f;
            }
            .alert {
                padding: 10px 14px;
                background: #282c34;
                color: #ffe082;
                border-radius: 6px;
                margin: 14px 0;
                border-left: 3px solid #ffe082;
                font-size: 1em;
            }
            .success {
                background: #233524;
                color: #b9f6ca;
                padding: 10px 14px;
                border-radius: 6px;
                margin-bottom: 14px;
                border-left: 3px solid #69f0ae;
                font-size: 1em;
            }
            .code-block {
                background: #23272e;
                color: #b2ebf2;
                padding: 10px 12px;
                border-radius: 6px;
                font-family: Consolas, monospace;
                margin: 10px 0;
                overflow-x: auto;
                font-size: 1em;
            }
            code {
                background: #23272e;
                color: #b2ebf2;
                padding: 2px 6px;
                border-radius: 4px;
                font-family: Consolas, monospace;
            }
            .switch {
                position: relative;
                display: inline-block;
                width: 46px;
                height: 24px;
                margin-right: 10px;
            }
            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #444c56;
                transition: .3s;
                border-radius: 24px;
            }
            .slider:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 3px;
                bottom: 3px;
                background: #fff;
                transition: .3s;
                border-radius: 50%;
            }
            input:checked + .slider {
                background: #3ea6ff;
            }
            input:checked + .slider:before {
                transform: translateX(22px);
            }
            .toggle-container {
                display: flex;
                align-items: center;
                margin-bottom: 12px;
            }
            @media (max-width: 600px) {
                .container { padding: 0; }
                .step { padding: 10px 4px; }
                .btn { padding: 7px 8px; font-size: 13px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>MyBatis-Plus 热加载配置</h1>
            <p>欢迎使用 MyBatis-Plus 热加载插件，此插件基于 JRebel 实现对 SQL 映射的热加载功能。</p>
            
            <div class="step">
                <h2>功能介绍</h2>
                <p>通过集成 JRebel，本插件可自动检测并热加载修改后的 SQL 映射文件，无需重启服务即可应用更改，大大提高开发效率。</p>
            </div>
            
            <div class="step">
                <h2>系统检测</h2>
                <p>当前系统: <strong>${osType}</strong></p>
            </div>
            
            <div class="step">
                <h2>配置说明</h2>
                <p>点击下方按钮，插件将自动执行以下操作：</p>
                <ol>
                    <li>检查 JRebel 是否已安装</li>
                    <li>将 MyBatis-Plus 热加载插件 jar 复制到 JRebel 插件目录</li>
                    <li>备份并更新 JRebel 配置文件</li>
                </ol>
                
                <div class="alert">
                    注意: 修改前会自动备份您的 jrebel.properties 文件，备份文件名带有时间戳。
                </div>
            </div>
            
            <div class="step">
                <h2>插件状态</h2>
                <div class="toggle-container">
                    <label class="switch">
                        <input type="checkbox" id="pluginToggle" ${pluginEnabled ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                    <span id="toggleStatus">${pluginEnabled ? '插件已启用' : '插件已禁用'}</span>
                </div>
                <button class="btn" id="setupBtn">应用设置</button>
                <button class="btn btn-disable" id="disableBtn">禁用插件</button>
            </div>
            
            <div class="step">
                <h2>如何验证插件是否成功加载</h2>
                <p>当您使用 JRebel 启动应用后，检查 JRebel 日志，如果看到类似以下内容，说明插件已成功加载：</p>
                <div class="code-block">
                    2025-05-21 09:13:23 JRebel: Ready config JRebel MybatisPlus plugin(1.0.7)...<br>
                    2025-05-21 09:13:23 JRebel: Add CBP for mybatis-plus core classes...
                </div>
                <p class="success">
                    <strong>✅ 成功：</strong> 看到上述日志表示插件已成功加载，现在您可以修改 SQL 映射文件，无需重启应用即可生效!
                </p>
            </div>
            
            <script>
                const vscode = acquireVsCodeApi();
                const pluginToggle = document.getElementById('pluginToggle');
                const toggleStatus = document.getElementById('toggleStatus');
                
                // 设置开关状态更新
                pluginToggle.addEventListener('change', function() {
                    if(this.checked) {
                        toggleStatus.textContent = "插件已启用";
                    } else {
                        toggleStatus.textContent = "插件已禁用";
                    }
                });
                
                // 应用按钮
                document.getElementById('setupBtn').addEventListener('click', () => {
                    vscode.postMessage({
                        command: 'setup',
                        enabled: pluginToggle.checked
                    });
                });
                
                // 禁用插件按钮
                document.getElementById('disableBtn').addEventListener('click', () => {
                    pluginToggle.checked = false;
                    toggleStatus.textContent = "插件已禁用";
                    vscode.postMessage({
                        command: 'setup',
                        enabled: false
                    });
                });
            </script>
        </div>
    </body>
    </html>
    `;
}