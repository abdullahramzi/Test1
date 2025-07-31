const express = require('express');
const i18next = require('i18next');
const path = require('path');
const fs = require('fs');

const app = express();
const products = require("./routes/products");
const vendors = require("./routes/vendors");
app.use("/api/products", products);
app.use("/api/vendors", vendors);

app.use(express.json());

// Initialize i18n with simple translations
const resources = {
  en: { translation: { welcome: 'Welcome to the E-commerce API' } },
  ar: { translation: { welcome: 'مرحبًا بكم في واجهة برمجة المتجر' } }
};

i18next.init({ resources, fallbackLng: 'en' });

app.use((req, res, next) => {
  const lang = req.headers['accept-language'];
  if (lang && resources[lang]) {
    i18next.changeLanguage(lang);
  }
  next();
});

app.get('/', (req, res) => {
  res.json({ message: i18next.t('welcome') });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
