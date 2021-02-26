const express = require("express");
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({extended: false}));

app.use('/', routes)

/** general error handler */

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    return res.json({
        error: err.message
    });
});

module.exports = app;