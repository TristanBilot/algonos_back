const mongoose = require('mongoose');
const Course = require('../models/Course');

const CourseSchema = mongoose.Schema({
    title: String,
    image: String,
    content: String
});

const CategorySchema = mongoose.Schema({
    name: String,
    courses: [CourseSchema],
    difficulty: String,
    image: {
        data: Buffer, 
        contentType: String
    }
});

module.exports = mongoose.model('Category', CategorySchema);
