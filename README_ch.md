# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Pokémon App <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />


## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/pokedex/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)

![应用程序预览](./public/podexFinal.gif)

欢迎来到 **Pokémon App**，这是一个使用 React 开发的应用程序，它显示了一个宝可梦列表，允许查看特定的详细信息并标记收藏。

## 先决条件

要测试并运行此应用程序，您需要配置以下环境：

- Node.js 版本 18 或 16（建议使用 Node.js 18 以确保与依赖项的兼容性）。

### 检查 Node.js 版本

要检查安装的 Node.js 版本是否兼容，请使用以下命令：

```bash
node -v
```

确保输出为 `v18.x.x` 或 `v16.x.x`。如果需要安装或更新 Node.js，您可以在 [此处](https://nodejs.org/) 下载。

## 安装

按照以下步骤在本地运行应用程序：

1. **克隆存储库：**

   ```bash
   git clone https://github.com/你的用户名/pokemon-app.git
   ```

2. **进入项目目录：**

   ```bash
   cd pokemon-app
   ```

3. **安装依赖项：**

   执行以下命令以安装所有必要的依赖项：

   ```bash
   npm install
   ```

4. **运行应用程序：**

   安装依赖项后，使用以下命令启动应用程序：

   ```bash
   npm start
   ```

   这将启动开发服务器。打开浏览器并访问 `http://localhost:3000` 以查看应用程序。

## 功能

- **Pokedex:** 显示宝可梦列表，并可将其标记为收藏。
- **宝可梦详情:** 显示选定宝可梦的详细信息。
- **收藏宝可梦:** 专门显示标记为收藏的宝可梦页面。
- **关于页面:** 解释应用程序的目的。
- **404 页面:** 当访问不存在的路由时显示。

## 项目结构

应用程序的结构如下：

- **`/src`**: 包含应用程序的所有源代码。
  - **`/components`**: 可重用组件。
  - **`/pages`**: 应用程序页面（Pokedex、详情、收藏、关于等）。
  - **`/types`**: 定义的 PropTypes 类型，用于验证 props。
  - **`Routes.js`**: 定义应用程序的主要路由。

## 测试

为确保应用程序正常运行，您可以使用以下命令运行自动化测试：

```bash
npm test
```

## 其他项目

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ch.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ch.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md)
