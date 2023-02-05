const Entry = require('../models/Entry');

module.exports.getEntries = async (req, res, next) => {
    try {
        const entries = await Entry.find().sort({ _id: -1 });
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