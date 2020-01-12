const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Content = require('../models/Content');

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

var insertCourse = (title, categoryId, percentage) => {
    const content = new Content({
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus euismod, ullamcorper nunc eu, finibus diam. Fusce massa ante, luctus ac metus sit amet, imperdiet lobortis diam. Quisque tortor est, sagittis pharetra erat a, vehicula dapibus ex. Nullam ultricies velit eget tortor facilisis tristique. Curabitur eu fringilla elit, ut eleifend lacus. Sed porta, metus sit amet faucibus tincidunt, mauris ipsum elementum ante, in pulvinar felis nulla ullamcorper augue. Curabitur at nibh et ipsum ullamcorper convallis. Proin eu dignissim dolor, blandit laoreet leo. Donec vulputate maximus ipsum, non convallis felis gravida dictum. Integer a arcu quam.",
        code: "https://i.goopics.net/vd057.png",
        complexity: {
            worst: 'O(n²)', 
            average: 'O(n)', 
            best: 'O(log(n))'
        }
    });
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

// insertCourse('Binary search', "5e15bd66353973e08a13fe5b", "34");
// insertCourse('Bubble sort', "5e15bd66353973e08a13fe5b", "100");
// insertCourse('Heap sort', "5e15bd66353973e08a13fe5b", "68");
// insertCourse('Selection sort', "5e15bd66353973e08a13fe5b", "100");

// insertCourse('Stack', "5e15bd66353973e08a13fe5d", "23");
// insertCourse('Queue', "5e15bd66353973e08a13fe5d", "47");

// insertCourse('Supervised learning', "5e15bd66353973e08a13fe5c", "100");
// insertCourse('Unsupervised learning', "5e15bd66353973e08a13fe5c", "100");

module.exports = router;