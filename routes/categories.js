const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Course = require('../models/Course');

router.get('/fetch', async (req, res) => {
    // console.log('[+] categories/fetch called.');
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

var insertCategory = (name, courses, imagePath) => {
    const category = new Category({
        name: name,
        courses: courses,
        image: imagePath
    });
    category.save(function (err) {
        if (err) console.log(err);
        else console.log('category ' + category + ' saved !')
    });
}

var deleteCategoryById = (id) => {
    Category.findOneAndRemove({_id: id}, (err) => {
        if (err) { console.log('failed to delete', err); }
        else { console.log('delete is a success'); }
    });
}

// insertCategory("Algorithm", [], "https://i.goopics.net/lpwGp.png");
// insertCategory("Data structures", [], "https://i.goopics.net/ELAeD.png");
// insertCategory("Deep Learning", [], "https://i.goopics.net/QLDxV.png");

module.exports = router;