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

router.get('/fetchCourseContent/:id', async (req, res) => {
    try {
        const courseList = await Course.find({_id: req.params.id})
        .then(function (courses) {
            console.log(courses);
            res.json(courses);
        });
    } catch (err) {
        console.log('fetchCourseContent/ failed');
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

var insertCourse = (title, content, categoryId, percentage) => {
    const course = new Course({
        title: title,
        content: content,
        categoryId: categoryId,
        percentage: percentage
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

// insertCourse('Binary search', "some content", "5e15bd66353973e08a13fe5b", "34");
// insertCourse('Bubble sort', "some content", "5e15bd66353973e08a13fe5b", "100");
// insertCourse('Heap sort', "some content", "5e15bd66353973e08a13fe5b", "68");
// insertCourse('Selection sort', "some content", "5e15bd66353973e08a13fe5b", "100");

// insertCourse('Stack', "some content", "5e15bd66353973e08a13fe5d", "23");
// insertCourse('Queue', "some content", "5e15bd66353973e08a13fe5d", "47");

// insertCourse('Supervised learning', "some content", "5e15bd66353973e08a13fe5c", "100");
// insertCourse('Unsupervised learning', "some content", "5e15bd66353973e08a13fe5c", "100");

module.exports = router;