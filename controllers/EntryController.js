const Entry = require('../models/Entry');
require('dotenv').config({path: './.env'})

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
        const entry = await Entry.create(req.body);
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
            } else {
                return res.status(500).json({
                success: false,
                error: `Server Error ${res.statusCode}`
            });
        }
    }
};

module.exports.getSingleEntry = async (req, res, next) => {
    try {
        const entry = await Entry.findOne({_id: req.params.id});
        console.log(entry);
        if(entry) {
            return res.status(200).json({
                success: true,
                entry: entry
            });
        } else {
            return res.status(404).json({
                success: false,
                error: `Not found. Error ${res.statusCode}`
            });
        }
    } catch (e) {
        //TODO Account for entry not found.
        return res.status(500).json({
            success: false,
            error: `Server Error ${res.statusCode}`
        });
    }
};