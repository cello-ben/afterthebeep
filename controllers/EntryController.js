const Entry = require('../models/Entry');
require('dotenv').config({path: './.env'});
const { Profanity, CensorType } = require('@2toad/profanity');

const profanity = new Profanity({
    languages: ['en', 'de', 'fr', 'es'],
    wholeWord: false
});

module.exports.getEntries = async (req, res, next) => {
    try {
        const entries = await Entry.find().sort({ created: -1 }).limit(process.env.DOC_LIMIT);
        return res.status(200).json({
            success: true,
            count: entries.length,
            entries: entries
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            error: `Server Error ${res.statusCode}`
        });
    }
};

module.exports.addEntry = async (req, res, next) => {
    try {
        const body = req.body;
        if (profanity.exists(body.text)) {
            throw new Error('Profanity detected.');
        }
        const entry = await Entry.create(body);
        return res.status(200).json({
            success: true,
            entry: entry
        });
    } catch (e) {
            if(e.name === 'ValidationError') {
                const messages = Object.values(e.errors).map(elem => elem.message);
                return res.status(404).json({
                    success: false,
                    errors: messages
                });
            } else if (e.message === 'Profanity detected.') {
                return res.status(403).json({
                    success: false,
                    errors: [e.message]
                });
            } else {
                return res.status(500).json({
                success: false,
                error: `Server Error ${res.statusCode}`
            });
        }
    }
};

module.exports.getSingleEntry = async (req, res, next) => {
    const id = req.params.id;
    if(id.length !== 12 && id.length !== 24) {
        return res.status(400).json({
            success: false,
            error: `Invalid request. Error 400`
        });
    }
    try {
        const entry = await Entry.findOne({_id: req.params.id});
        if(entry) {
            return res.status(200).json({
                success: true,
                entry: entry
            });
        } else {
            return res.status(404).json({
                success: false,
                error: `Not found. Error 404`
            });
        }
    } catch (e) {
        return res.status(500).json({
            success: false,
            error: `Server Error ${res.statusCode}`
        });
    }
};