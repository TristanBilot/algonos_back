const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    title: String,
    image: String,
    content: String
});

module.exports = mongoose.model('Course', CourseSchema);
