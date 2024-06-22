const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Transaction = require('../models/Transaction');

// POST: Add a new transaction
router.post('/', auth, async (req, res) => {
    const { type, category, amount } = req.body;
    try {
        const newTransaction = new Transaction({
            user: req.user.id,
            type,
            category,
            amount
        });
        const transaction = await newTransaction.save();
        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// GET: Retrieve all transactions for a user
router.get('/', auth, async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
