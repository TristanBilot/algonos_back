const mongoose = require('mongoose');
const Course = require('../models/Course');

const CourseSchema = mongoose.Schema({
    title: String,
    content: String,
    categoryId: String,
    percentage: String
});

const CategorySchema = mongoose.Schema({
    name: String,
    courses: [CourseSchema],
    image: String
});

module.exports = mongoose.model('Category', CategorySchema);
