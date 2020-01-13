const Course = require('../../models/Course');

var insertCourse = async (title, content, categoryId) => {
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

// var courseExists = async (title) => {
//     const one = Course.findOne({title: title})
//     .then(function(course) {
//         // if (course == null) { return }
//         return course == null ? false : true;
//     })
//     .catch(err => { throw err });
//     // return one != null;
// }

var deleteCourseById = (id) => {
    Course.findOneAndRemove({_id: id}, (err) => {
        if (err) { console.log('failed to delete', err); }
        else { console.log('delete is a success'); }
    });
}

module.exports = {deleteCourseById, insertCourse}