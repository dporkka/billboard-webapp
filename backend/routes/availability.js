const express = require('express');
const router = express.Router();
const Availability = require('../models/Availability');

// Get availability data
router.get('/', async (req, res) => {
  try {
    const availability = await Availability.find();
    res.json(availability);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
