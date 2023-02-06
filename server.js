const express = require('express');
const cors = require('cors');
require('dotenv').config({path: './.env'});

const connectDB = require('./config/db');

const app = express();
app.use(express.static('client/build'));
app.use(express.json());

// For development:
// app.use(cors({
//     origin: process.env.ORIGIN
// }));

connectDB();

const entries = require('./api/v1/routes/entries');
app.use('/api/v1/entries', entries);

app.get('/', (req, res) => {
    return res.sendFile('index.html');
});

app.listen(process.env.PORT || 4000);