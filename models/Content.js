const mongoose = require('mongoose');

const ContentSchema = mongoose.Schema({
    text: String,
    code: String,
    complexity: {
        worst: String,
        average: String,
        best: String
    }
});

module.exports = mongoose.model('Content', ContentSchema);
