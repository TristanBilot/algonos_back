const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Category = require('../models/Category');

// router.get('/', (req, res) => {
//     res.send([{data_structure: "Data structures"}, {algorithm: "Algorithm"}]);
// });

router.get('/add/:title', (req, res) => {
    const course = new Course({
        title: req.body.title
    });
    course.save(function (err) {
        if (err) return handleError(err);
        console.log('saved !')
    });
});

router.get('/find', async (req, res) => {
    console.log('find');
    try {
        const course = await Course.find({}).then(function (courses) {
            console.log(courses);
            res.json(courses);
        });
    } catch (err) {
        res.json({ message: err });
    }
});

var deleteCourseById = (id) => {
    Course.findOneAndRemove({_id: id}, (err) => {
        if (err) { console.log('failed to delete', err); }
        else { console.log('delete is a success'); }
    });
}

var addCourse = (name) => {
    const course = new Course({
        title: name
    });
    course.save(function (err) {
        if (err) return handleError(err);
        console.log('saved !')
    });
}

var addCategory = (name) => {
    const category = new Category({
        name: "Algorithm",
        courses: [Course],
        difficulty: String
    });
    category.save(function (err) {
        if (err) return handleError(err);
        console.log('saved !')
    });
}

deleteCourseById("5dfa3824bf4358c38294f328");
deleteCourseById("5dfa3824bf4358c38294f329");
deleteCourseById("5dfa3824bf4358c38294f32a");

// addCourse("Algorithm");
// addCourse("Data Structures");
// addCourse("Machine Learning");

// const course = new Course({
//     title: "Tristan"
// });
// const course2 = new Course({
//     title: "Manon"
// });
// course.save(function (err) {
//     if (err) return handleError(err);
//     console.log('saved !')
// });
// course2.save(function (err) {
//     if (err) return handleError(err);
//     console.log('saved !')
// });

module.exports = router;