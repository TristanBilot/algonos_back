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



router.get('/findWithCategoryId/:id', async (req, res) => {
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

const course1 = new Course({
    title: "Stacks",
    image: "nil",
    content: "Stacks description...",
    categoryId: "5dfa71a7e846280f4b75a4c9"
});

const course2 = new Course({
    title: "Queues",
    image: "nil",
    content: "Queues description...",
    categoryId: "5dfa71a7e846280f4b75a4c9"
});

const course3 = new Course({
    title: "Trees",
    image: "nil",
    content: "Trees description...",
    categoryId: "5dfa71a7e846280f4b75a4c9"
});

var addCategory = (name, courses, difficulty) => {
    const category = new Category({
        name: name,
        courses: courses,
        difficulty: difficulty
    });
    category.save(function (err) {
        if (err) return handleError(err);
        console.log('saved !')
    });
}

var addCourse = () => {
    course1.save(function (err) {
        if (err) return handleError(err);
        console.log('saved !')
    });
    course2.save(function (err) {
        if (err) return handleError(err);
        console.log('saved !')
    });
    course3.save(function (err) {
        if (err) return handleError(err);
        console.log('saved !')
    });
}

module.exports = router;