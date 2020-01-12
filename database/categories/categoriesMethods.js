const Category = require('../../models/Category');

var insertCategory = async (name, imagePath) => {
    const category = new Category({
        name: name,
        image: imagePath
    });
    category.save(function (err) {
        if (err) console.log(err);
        else console.log('category ' + category + ' saved !')
    });
}

var getCategoryIdFromName = async (name) => {
        const one = Category.findOne({name: name})
        .then(function(category) {
            console.log(category._id);
            // return category._id;
        })
        .catch(err => { throw err });
        return one;
}

var deleteCategoryById = (id) => {
    Category.findOneAndRemove({_id: id}, (err) => {
        if (err) { console.log('failed to delete', err); }
        else { console.log('delete is a success'); }
    });
}

module.exports = {getCategoryIdFromName, deleteCategoryById, insertCategory};