# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Pokémon App <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/pokedex/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)

![应用预览](./public/podexFinal.gif)

欢迎来到 **Pokémon App**，这是一个用 React 开发的应用程序，显示 Pokémon 列表，允许查看特定细节并标记为收藏。

<details>
  <summary><h2>📋 前提条件</h2></summary>

  要测试和运行应用程序，您需要配置以下环境：

  - Node.js 版本 18 或 16（建议使用 Node.js 18 以确保与依赖项的兼容性）。

  ### 检查 Node.js 版本

  要检查安装的 Node.js 版本是否兼容，请使用以下命令：

  ```bash
  node -v
  ```

  确保返回的结果为 `v18.x.x` 或 `v16.x.x`。如果需要安装或更新 Node.js，您可以 [在这里下载](https://nodejs.org/)。

</details>

<details>
  <summary><h2>📦 安装</h2></summary>

  请按照以下步骤在本地运行应用程序：

  1. **克隆仓库：**

     ```bash
     git clone git@github.com:SamuelRocha91/pokedex.git
     ```

  2. **进入项目目录：**

     ```bash
     cd pokemon-app
     ```

  3. **安装依赖项：**

     运行以下命令以安装所有必要的依赖项：

     ```bash
     npm install
     ```

  4. **运行应用程序：**

     安装依赖项后，使用以下命令启动应用程序：

     ```bash
     npm start
     ```

     这将启动开发服务器。打开浏览器并访问 `http://localhost:3000` 查看应用程序。

</details>

<details>
  <summary><h2>✨ 功能</h2></summary>

  - **Pokedex:** 显示 Pokémon 列表并可以标记为收藏。
  - **Pokémon 详情:** 显示所选 Pokémon 的详细信息。
  - **收藏的 Pokémon:** 专门用于显示标记为收藏的 Pokémon 的页面。
  - **关于页面:** 解释应用程序的目的。
  - **未找到页面 (404):** 当访问不存在的路由时显示。

</details>

<details>
  <summary><h2>📂 项目结构</h2></summary>

  应用程序的结构如下：

  - **`/src`**: 包含应用程序的所有源代码。
    - **`/components`**: 可重用组件。
    - **`/pages`**: 应用程序页面（Pokedex、详情、收藏、关于等）。
    - **`/types`**: 为 props 验证定义的 PropTypes 类型。
    - **`Routes.js`**: 定义应用程序的主要路由。

</details>

<details>
  <summary><h2>🧪 测试</h2></summary>

  为确保应用程序正常工作，您可以使用以下命令运行自动化测试：

  ```bash
  npm test
  ```

</details>

<details>
  <summary><h2>🔗 其他项目</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ch.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md)
  - 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md)

</details>