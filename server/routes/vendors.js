const express = require('express');
const router = express.Router();

// Placeholder vendor list
let vendors = [
  { id: 1, name: 'Vendor 1', approved: true }
];

router.get('/', (req, res) => {
  res.json(vendors);
});

router.post('/', (req, res) => {
  const { name } = req.body;
  const id = vendors.length + 1;
  vendors.push({ id, name, approved: false });
  res.status(201).json({ id });
});

module.exports = router;
