const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/find', async (req, res) => {
    console.log('attempt to find');
    try {
        const category = await Category.find({}).then(function (categories) {
            console.log(categories);
            res.json(categories);
        });
    } catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;