# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Pokémon App <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/pokedex/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)

![Предпросмотр приложения](./public/podexFinal.gif)

Добро пожаловать в **Pokémon App**, приложение, разработанное на React, которое отображает список покемонов, позволяет просматривать конкретные детали и добавлять в избранное.

<details>
  <summary><h2>📋 Предварительные требования</h2></summary>

  Для тестирования и запуска приложения вам необходимо настроить следующую среду:

  - Node.js версии 18 или 16 (рекомендуется Node.js 18 для обеспечения совместимости с зависимостями).

  ### Проверьте версию Node.js

  Чтобы проверить, совместима ли установленная версия Node.js, используйте команду:

  ```bash
  node -v
  ```

  Убедитесь, что вывод равен `v18.x.x` или `v16.x.x`. Если вам нужно установить или обновить Node.js, вы можете скачать его [здесь](https://nodejs.org/).

</details>

<details>
  <summary><h2>📦 Установка</h2></summary>

  Следуйте приведенным ниже шагам, чтобы запустить приложение локально:

  1. **Клонируйте репозиторий:**

     ```bash
     git clone git@github.com:SamuelRocha91/pokedex.git
     ```

  2. **Перейдите в директорию проекта:**

     ```bash
     cd pokemon-app
     ```

  3. **Установите зависимости:**

     Выполните команду ниже, чтобы установить все необходимые зависимости:

     ```bash
     npm install
     ```

  4. **Запустите приложение:**

     После установки зависимостей запустите приложение с помощью команды:

     ```bash
     npm start
     ```

     Это запустит сервер разработки. Откройте браузер и перейдите по адресу `http://localhost:3000`, чтобы просмотреть приложение.

</details>

<details>
  <summary><h2>✨ Функциональность</h2></summary>

  - **Pokedex:** Отображает список покемонов с возможностью добавления в избранное.
  - **Детали покемона:** Показывает подробную информацию о выбранном покемоне.
  - **Избранные покемоны:** Страница, посвященная покемонам, отмеченным как избранные.
  - **Страница "О приложении":** Объясняет назначение приложения.
  - **Страница "Не найдено" (404):** Отображается, когда доступ к несуществующему маршруту.

</details>

<details>
  <summary><h2>📂 Структура проекта</h2></summary>

  Приложение структурировано следующим образом:

  - **`/src`**: Содержит весь исходный код приложения.
    - **`/components`**: Переиспользуемые компоненты.
    - **`/pages`**: Страницы приложения (Pokedex, Детали, Избранные, О приложении и т. д.).
    - **`/types`**: Типы PropTypes, определенные для проверки props.
    - **`Routes.js`**: Определяет основные маршруты приложения.

</details>

<details>
  <summary><h2>🧪 Тесты</h2></summary>

  Чтобы гарантировать правильную работу приложения, вы можете запустить автоматические тесты, используя:

  ```bash
  npm test
  ```

</details>

<details>
  <summary><h2>🔗 Другие проекты</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ru.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md)
  - 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md)

</details>