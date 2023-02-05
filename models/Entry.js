const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Text entry is required.']
    }
});

module.exports = mongoose.model('Entry', EntrySchema, 'entries');

