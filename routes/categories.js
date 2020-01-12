const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Course = require('../models/Course');

router.get('/fetch', async (req, res) => {
    console.log('[+] categories/fetch called.');
    try {
        const category = await Category.find({}).then(function (categories) {
            console.log(categories);
            res.json(categories);
        });
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/fetchPercentages/:id', async (req, res) => {
    console.log('[+] categories/fetchPercentages/' + req.params.id + ' called.');
    try {
        const courseList = await Course.find({categoryId: req.params.id})
        .then(function (courses) {
            var totalPercentage = 1;
            var i = 0
            for (; i < courses.length; i++) {
                var obj = courses[i];
                totalPercentage += parseInt(obj.percentage);
            }
            totalPercentage /= i;
            totalPercentage = Math.floor(totalPercentage);
            console.log(totalPercentage);
            res.send({
                "totalPercentage": totalPercentage.toString(),
            });
        });
    } catch (err) {
        res.json({ message: err });
        console.log('fail' + err);
    }
});

module.exports = router;