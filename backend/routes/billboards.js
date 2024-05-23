// routes/billboards.js
const express = require('express');
const router = express.Router();
const Billboard = require('../models/Billboard');

// Get all billboards
router.get('/', async (req, res) => {
  try {
    const billboards = await Billboard.find();
    res.json(billboards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new billboard
router.post('/', async (req, res) => {
  const billboard = new Billboard({
    location: req.body.location,
    size: req.body.size,
    price: req.body.price,
    availability: req.body.availability,
    owner: req.body.owner,
  });

  try {
    const newBillboard = await billboard.save();
    res.status(201).json(newBillboard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
