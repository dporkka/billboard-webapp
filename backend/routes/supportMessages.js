const express = require('express');
const router = express.Router();
const SupportMessage = require('../models/SupportMessage');

// Get support messages
router.get('/', async (req, res) => {
  try {
    const messages = await SupportMessage.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
