const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({message: "hello motherfuck"})
});

module.exports = app;