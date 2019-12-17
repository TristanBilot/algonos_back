const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', (req, res) => {
    res.json([{data_structure: "Data structures"}, {algorithm: "Algorithm"}]);
});

router.get('/getCourse', (req, res) => {
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

module.exports = router;