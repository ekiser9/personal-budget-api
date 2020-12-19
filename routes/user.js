const express = require('express');
const router = express.Router();
const userModel = require('../models/userSchema');

// Create


// Read
router.get('/', async (req,res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update


// Delete

module.exports = router;