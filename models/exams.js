const mongoose = require('mongoose'); 

var examSchema = new mongoose.Schema({
    book: {type: String}
});

module.exports = mongoose.model('Exam', examSchema);
