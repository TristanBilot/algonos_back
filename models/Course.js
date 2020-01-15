const mongoose = require('mongoose');
const Category = require('../models/Content');

const ContentSchema = mongoose.Schema({
    text: String,
    code: String,
    complexity: Object
});

const CourseSchema = mongoose.Schema({
    title: String,
    content: [Object],
    categoryId: String,
    percentage: String
});

module.exports = mongoose.model('Course', CourseSchema);
