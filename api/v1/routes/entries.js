const express = require('express');
const router = express.Router();
const { getEntries, addEntry, getSingleEntry } = require('../../../controllers/EntryController');

router.route('/')
    .get(getEntries)
    .post(addEntry);

router.route('/message/:id')
    .get(getSingleEntry);

module.exports = router;