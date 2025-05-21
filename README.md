

<div align="center">
    <img src="resources/icon.png" alt="logo" />
</div>

# VSCode MyBatis-Plus 热加载插件

> ⚠️ 本插件的 MyBatis-Plus 热加载核心功能基于 [SweetInk/jrebel-mybatisplus](https://github.com/SweetInk/jrebel-mybatisplus) 项目实现，感谢原作者开源贡献！

## 功能简介 🚀

VSCode MyBatis-Plus 热加载插件，基于JRebel的MyBatis-Plus SQL映射热加载插件，可以在不重启服务的情况下，实时加载修改后的SQL映射文件，提高开发效率。

## 前提条件 ⚠️

使用本插件前，需要先安装JRebel，并确保JRebel正常运行。

## 安装方法 📥

1. 从VSCode插件市场搜索并安装 "scode-mybatisplus-jrebel" 插件
2. 通过VSIX文件安装：点击左侧扩展视图 > 更多操作(...) > 从VSIX安装...

## 使用方法 🛠️

1. 安装插件后，按 `Ctrl+Shift+P`（Windows/Linux）或 `Command+Shift+P`（Mac）打开命令面板
2. 输入并选择 "Mscode-mybatisplus-jrebel.setup-config" 命令（命令ID：`vscode-mybatisplus-jrebel.setup`）
3. 按照引导页面的指示完成配置

### 常用命令

- `npm run setup`  
  一键打包并安装本地 VSIX 插件（需已安装 vsce 和 code 命令行工具）

## 工作原理 🔄

1. 插件会自动检测JRebel安装状态
2. 将MyBatis-Plus热加载插件jar文件复制到JRebel插件目录
3. 备份并修改JRebel配置文件，添加MyBatis-Plus插件支持
4. 完成后，您修改的SQL映射文件将被实时加载到运行中的应用

## 特色功能 ✨

1. **开关控制** - 通过界面上的开关按钮轻松启用或禁用插件
2. **配置备份** - 自动备份JRebel配置文件，确保安全
3. **成功提示** - 详细的日志说明，帮助您确认插件是否成功加载
4. **简易操作** - 友好的用户界面，只需点击按钮即可完成所有配置

## 系统要求 💻

- VS Code 1.60.0 或更高版本
- JRebel 最新版本
- Java 8 或更高版本

## 支持平台 🌐

- Windows
- macOS
- Linux

## 常见问题 ❓

**Q: 无法找到JRebel安装？**  
A: 请确保已正确安装JRebel，并检查是否存在 `~/.jrebel/jrebel.properties` 文件（Mac/Linux）或用户目录下的对应文件（Windows）。

**Q: 配置后热加载不生效？**  
A: 请重新启动您的Java应用，确保使用JRebel启动，并检查JRebel日志中是否有加载MyBatis-Plus插件的相关信息。

## 许可证 📝

MIT 
