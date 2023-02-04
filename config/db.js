const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});

async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewURLParser: true,
            useUnifiedTopology: true
        });
    } catch (e) {
        console.error(e);
    }
}

module.exports = connectDB;