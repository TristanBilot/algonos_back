const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    title: String,
});

module.exports = mongoose.model('Course', CourseSchema);
