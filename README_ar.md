# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Pokémon App <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/pokedex/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)

![معاينة التطبيق](./public/podexFinal.gif)

مرحبًا بك في **تطبيق Pokémon**، وهو تطبيق تم تطويره باستخدام React يعرض قائمة بالبوكيمون، ويسمح بعرض التفاصيل المحددة ووضع إشارة على المفضلة.

## المتطلبات الأساسية

لتجربة وتشغيل التطبيق، تحتاج إلى إعداد البيئة التالية:

- Node.js الإصدار 18 أو 16 (يوصى باستخدام Node.js 18 لضمان التوافق مع التبعية).

### تحقق من إصدار Node.js

للتحقق مما إذا كان إصدار Node.js المثبت متوافقًا، استخدم الأمر:

```bash
node -v
```

تأكد من أن النتيجة هي `v18.x.x` أو `v16.x.x`. إذا كنت بحاجة إلى تثبيت أو تحديث Node.js، يمكنك تنزيله من [هنا](https://nodejs.org/).

## التثبيت

اتبع الخطوات التالية لتشغيل التطبيق محليًا:

1. **استنساخ المستودع:**

   ```bash
   git clone https://github.com/اسم-المستخدم/pokemon-app.git
   ```

2. **انتقل إلى دليل المشروع:**

   ```bash
   cd pokemon-app
   ```

3. **قم بتثبيت التبعيات:**

   نفذ الأمر التالي لتثبيت جميع التبعيات اللازمة:

   ```bash
   npm install
   ```

4. **قم بتشغيل التطبيق:**

   بعد تثبيت التبعيات، قم بتشغيل التطبيق باستخدام الأمر:

   ```bash
   npm start
   ```

   سيؤدي ذلك إلى بدء خادم التطوير. افتح المتصفح وانتقل إلى `http://localhost:3000` لعرض التطبيق.

## الميزات

- **بوكيديكس:** يعرض قائمة البوكيمون مع إمكانية إضافتها إلى المفضلة.
- **تفاصيل البوكيمون:** يعرض معلومات مفصلة عن البوكيمون المحدد.
- **بوكيمون المفضل:** صفحة مخصصة للبوكيمون الذي تم وضع إشارة عليه كمفضل.
- **صفحة حول:** تشرح الغرض من التطبيق.
- **صفحة غير موجودة (404):** تظهر عند الوصول إلى مسار غير موجود.

## هيكل المشروع

يتم تنظيم التطبيق على النحو التالي:

- **`/src`**: يحتوي على جميع الشيفرة المصدرية للتطبيق.
  - **`/components`**: مكونات قابلة لإعادة الاستخدام.
  - **`/pages`**: صفحات التطبيق (بوكيديكس، التفاصيل، المفضلة، حول، إلخ).
  - **`/types`**: أنواع PropTypes المعرفة للتحقق من صحة المكونات.
  - **`Routes.js`**: يحدد المسارات الرئيسية للتطبيق.

## الاختبارات

للتأكد من أن التطبيق يعمل بشكل صحيح، يمكنك تشغيل الاختبارات الآلية باستخدام:

```bash
npm test
```

## مشاريع أخرى

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ar.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ar.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-storeblob/main/README_ar.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_gameblob/main/README_ar.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)
