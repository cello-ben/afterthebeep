const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Text entry is required.']
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Entry', EntrySchema, 'entries');

