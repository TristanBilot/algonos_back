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

router.get('/fetchWithId/:id', async (req, res) => {
    console.log('[+] courses/fetchWithId/' + req.params.id + ' called.');
    try {
        const courseList = await Course.find({_id: req.params.id})
        .then(function (course) {
            console.log(course);
            res.json(course);
        });
    } catch (err) {
        console.log('fetch/' + eq.params.id + ' failed');
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

module.exports = router;