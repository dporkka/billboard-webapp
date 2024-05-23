const express = require('express');
const router = express.Router();
const Impression = require('../models/Impression');

// Get impressions data
router.get('/', async (req, res) => {
  try {
    const impressions = await Impression.find();
    res.json(impressions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
