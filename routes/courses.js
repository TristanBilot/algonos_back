const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', (req, res) => {
    res.json([{data_structure: "Data structures"}, {algorithm: "Algorithm"}]);
});

router.post('/', (req, res) => {
    const course = new Course({
        title: req.body.title
    });
    course.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

router.get('/add', async (req, res) => {
    console.log('add');
    const course = new Course({
        title: req.body.title
    });
    try {
        const savedCourse = await course.save();
        res.json(data);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/find', async (req, res) => {
    console.log('find');
    try {
        const course = await Course.find({}).then(function (courses) {
            res.send(courses);
        });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;