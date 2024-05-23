const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// Get all campaigns
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new campaign
router.post('/', async (req, res) => {
  const campaign = new Campaign({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    budget: req.body.budget,
    billboard: req.body.billboard,
    createdBy: req.body.createdBy,
  });

  try {
    const newCampaign = await campaign.save();
    res.status(201).json(newCampaign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
