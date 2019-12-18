const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

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

var insertCategory = (name, courses, difficulty) => {
    const category = new Category({
        name: name,
        courses: courses,
        difficulty: difficulty
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

module.exports = router;