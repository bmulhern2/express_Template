const express = require('express');
const mongoose = require('mongoose');
// Connect To Database
mongoose.connect('mongodb+srv://bmulhern2:<password>@cluster0-rsgdt.mongodb.net/test?retryWrites=true&w=majority');
// Define Schema
// Connect Schema to Form
// Initalize App
var app = express();
// Route the Index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Listen on port 3000
app.listen(3000);
// Exports App
module.exports = app;
