const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    title: String,
    image: String,
    content: String,
    categoryId: String
});

module.exports = mongoose.model('Course', CourseSchema);
