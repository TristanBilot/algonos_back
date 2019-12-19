const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/fetch', async (req, res) => {
    console.log('[+] courses/fetch called.');
    try {
        const course = await Course.find({}).then(function (courses) {
            console.log(courses);
            res.json(courses);
        });
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/fetchWithCategoryId/:id', async (req, res) => {
    console.log('[+] courses/fetchWithCategoryId/' + req.params.id + ' called.');
    try {
        const courseList = await Course.find({categoryId: req.params.id})
        .then(function (courses) {
            console.log(courses);
            res.json(courses);
        });
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/add/:title', (req, res) => {
    const course = new Course({
        title: req.body.title
    });
    course.save(function (err) {
        if (err) return handleError(err);
        console.log('saved !')
    });
});

var insertCourse = (title, content, categoryId) => {
    const course = new Course({
        title: title,
        content: content,
        categoryId: categoryId
    });
    course.save(function (err) {
        if (err) console.log(err);
        else console.log('course ' + course + ' saved !')
    });
}

var deleteCourseById = (id) => {
    Course.findOneAndRemove({_id: id}, (err) => {
        if (err) { console.log('failed to delete', err); }
        else { console.log('delete is a success'); }
    });
}

// insertCourse('Binary search', "some content", "5dfb55f905b167d118e4de09");
// insertCourse('Quick sort', "some content", "5dfb55f905b167d118e4de09");
// insertCourse('Bubble sort', "some content", "5dfb55f905b167d118e4de09");
// insertCourse('Heap sort', "some content", "5dfb55f905b167d118e4de09");
// insertCourse('Selection sort', "some content", "5dfb55f905b167d118e4de09");

// insertCourse('Stack', "some content", "5dfb55f905b167d118e4de0a");
// insertCourse('Queue', "some content", "5dfb55f905b167d118e4de0a");

// insertCourse('Supervised learning', "some content", "5dfb55f905b167d118e4de0b");
// insertCourse('Unsupervised learning', "some content", "5dfb55f905b167d118e4de0b");

module.exports = router;