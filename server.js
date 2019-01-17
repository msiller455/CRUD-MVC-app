const express = require('express');
const app = express();

const Guitars = require('./models/guitars');



app.get('/guitars', (req, res) => {
    res.send(Guitars);
});


app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

module.exports = app;