# MyBatis-Plus 热加载插件安装指南 🚀

## 安装步骤

### 方法一：通过VSIX文件安装
1. 下载 `vscode-mybatisplus-1.0.0.vsix` 文件
2. 在VSCode中，点击左侧的"扩展"图标（或按 `Ctrl+Shift+X` / `Cmd+Shift+X`）
3. 点击扩展栏顶部的三个点 `...` 按钮，选择"从VSIX安装..."
4. 选择下载的 `.vsix` 文件
5. 安装完成后重启VSCode

### 方法二：通过命令行安装
```bash
code --install-extension vscode-mybatisplus-1.0.0.vsix
```

## 使用方法

1. 安装完成后，按 `Ctrl+Shift+P`（Windows/Linux）或 `Command+Shift+P`（Mac）打开命令面板
2. 输入并选择 "MyBatis-Plus: 配置热加载" 命令
3. 在引导页面上，您可以：
   - 使用开关按钮启用或禁用插件
   - 点击"应用设置"按钮应用当前设置
   - 点击"禁用插件"按钮快速禁用插件

## 新增功能

1. **开关按钮**: 可以方便地启用或禁用插件
2. **配置备份**: 在修改配置文件前会自动备份原始配置文件
3. **成功提示**: 添加了如何验证插件是否成功加载的说明

## 验证插件是否成功加载

当您使用 JRebel 启动应用后，检查 JRebel 日志，如果看到类似以下内容，说明插件已成功加载：
```
2025-05-21 09:13:23 JRebel: Ready config JRebel MybatisPlus plugin(1.0.7)...
2025-05-21 09:13:23 JRebel: Add CBP for mybatis-plus core classes...
```

## 前提条件

- 必须已安装JRebel（[https://www.jrebel.com/](https://www.jrebel.com/)）
- JRebel配置文件应位于 `~/.jrebel/jrebel.properties`（Mac/Linux）或用户目录下的对应位置（Windows）

## 问题排查

如果遇到以下问题：

1. **未检测到JRebel安装**
   - 确认已正确安装JRebel
   - 检查JRebel配置文件路径

2. **配置后热加载不生效**
   - 重新启动Java应用
   - 确认使用JRebel启动应用
   - 检查JRebel日志是否有加载MyBatis-Plus插件的记录

3. **权限问题**
   - 确保对 `~/.jrebel/` 目录有写权限

4. **配置文件备份**
   - 备份文件位于原配置文件相同目录，命名格式为 `jrebel.properties.backup.{timestamp}`

如有问题，请提交issue至项目仓库。 