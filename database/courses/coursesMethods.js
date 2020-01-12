const Course = require('../../models/Course');

var insertCourse = (title, content, categoryId) => {
    const course = new Course({
        title: title,
        content: content,
        categoryId: categoryId,
        percentage: "0"
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

module.exports = {deleteCourseById, insertCourse}