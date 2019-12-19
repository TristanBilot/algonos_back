const express = require('express');
var fs = require('fs');
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

var insertCategory = (name, courses, difficulty, imagePath) => {
    const category = new Category({
        name: name,
        courses: courses,
        difficulty: difficulty,
        image: {
            data: fs.readFileSync(imagePath),
            contentType: 'image/png'
        }
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

// insertCategory("Algorithm", [], "medium", "./resources/img/algorithm.png");
// insertCategory("Data strctures", [], "medium", "./resources/img/data_struct.png");
// insertCategory("Deep Learning", [], "medium", "./resources/img/ai.png");

module.exports = router;