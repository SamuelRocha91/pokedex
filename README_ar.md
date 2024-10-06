# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> تطبيق البوكيمون <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/pokedex/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)

![معاينة التطبيق](./public/podexFinal.gif)

مرحبًا بكم في **تطبيق البوكيمون**، وهو تطبيق تم تطويره باستخدام React لعرض قائمة من بوكيمون، مما يتيح عرض تفاصيل محددة وتحديد المفضلات.

<details>
  <summary><h2>📋 المتطلبات الأساسية</h2></summary>

  لاختبار وتشغيل التطبيق، تحتاج إلى إعداد البيئة التالية:

  - Node.js الإصدار 18 أو 16 (يُنصح باستخدام Node.js 18 لضمان التوافق مع التبعيات).

  ### تحقق من إصدار Node.js

  للتحقق مما إذا كان الإصدار المثبت من Node.js متوافقًا، استخدم الأمر:

  ```bash
  node -v
  ```

  تأكد من أن النتيجة هي `v18.x.x` أو `v16.x.x`. إذا كنت بحاجة إلى تثبيت أو تحديث Node.js، يمكنك تنزيله [هنا](https://nodejs.org/) .

</details>

<details>
  <summary><h2>📦 التثبيت</h2></summary>

  اتبع الخطوات أدناه لتشغيل التطبيق محليًا:

  1. **استنساخ المستودع:**

     ```bash
     git clone git@github.com:SamuelRocha91/pokedex.git
     ```

  2. **الانتقال إلى دليل المشروع:**

     ```bash
     cd pokemon-app
     ```

  3. **تثبيت التبعيات:**

     قم بتنفيذ الأمر أدناه لتثبيت جميع التبعيات الضرورية:

     ```bash
     npm install
     ```

  4. **تشغيل التطبيق:**

     بعد تثبيت التبعيات، ابدأ التطبيق باستخدام الأمر:

     ```bash
     npm start
     ```

     سيؤدي ذلك إلى بدء خادم التطوير. افتح المتصفح وانتقل إلى `http://localhost:3000` لمشاهدة التطبيق.

</details>

<details>
  <summary><h2>✨ الميزات</h2></summary>

  - **بوكيمون:** يعرض قائمة من البوكيمون مع إمكانية وضعها كمفضلة.
  - **تفاصيل بوكيمون:** يعرض المعلومات التفصيلية للبوكيمون المحدد.
  - **بوكيمون المفضلة:** صفحة مخصصة للبوكيمون المعلم كمفضلة.
  - **صفحة حول:** تشرح هدف التطبيق.
  - **صفحة غير موجودة (404):** تظهر عند الوصول إلى مسار غير موجود.

</details>

<details>
  <summary><h2>📂 هيكل المشروع</h2></summary>

  هيكل التطبيق كما يلي:

  - **`/src`**: يحتوي على جميع كود المصدر للتطبيق.
    - **`/components`**: مكونات قابلة لإعادة الاستخدام.
    - **`/pages`**: صفحات التطبيق (بوكيمون، تفاصيل، مفضلة، حول، إلخ).
    - **`/types`**: أنواع PropTypes المحددة للتحقق من صحة الخصائص.
    - **`Routes.js`**: يحدد المسارات الرئيسية للتطبيق.

</details>

<details>
  <summary><h2>🧪 الاختبارات</h2></summary>

  لضمان أن التطبيق يعمل بشكل صحيح، يمكنك تشغيل الاختبارات الآلية باستخدام:

  ```bash
  npm test
  ```

</details>

<details>
  <summary><h2>🔗 مشاريع أخرى</h2></summary>

  - 🌶️ [تطبيق الوصفات](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ar.md)
  - 🎮 [تريفي](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)
  - 👛 [منظم النفقات](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

</details>