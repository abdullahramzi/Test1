const express = require('express');
const router = express.Router();
const { generateDescriptionFromImage } = require('../utils/ai');

let products = [
  { id: 1, name: 'Sample Product', description: 'Description here' }
];

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', async (req, res) => {
  const { name, description, image } = req.body;
  const id = products.length + 1;
  let desc = description;
  if (!desc && image) {
    desc = await generateDescriptionFromImage(Buffer.from(image, 'base64'), req.headers['accept-language'] || 'en');
  }
  products.push({ id, name, description: desc });
  res.status(201).json({ id, description: desc });
});

module.exports = router;
