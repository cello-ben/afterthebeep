const express = require('express');
const router = express.Router();
const { getEntries, addEntry } = require('../../../controllers/EntryController');

router.route('/')
    .get(getEntries)
    .post(addEntry);

module.exports = router;