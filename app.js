const express = require("express");
const app = express();

app.use(express.json());

// default error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).send(err.message);
});

module.exports = app;