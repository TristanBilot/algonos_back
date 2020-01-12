const mongoose = require('mongoose');

const ContentSchema = mongoose.Schema({
    text: String,
    code: String,
    complexity: Object
});

module.exports = mongoose.model('Content', ContentSchema);
