const express = require('express');
const cors = require('cors');
const logger = require('morgan');

// const postsRouter = require('./routes/post');

const db = require('./database/db');
const api = express();
api.use(cors());
api.use(express.json());
api.use(logger('dev'));
api.get("/", (req, res) => {
    res.json({
        title: "Bridget Jones' Diary",
        description: "Diary app"
    });
});
// api.use('/posts', postsRouter);
module.exports = api;