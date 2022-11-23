const express = require('express');
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

const app = express();



app.use('/books', require('./routes/book-routes'))

app.listen(port, () => console.log("Server started listening on port " + port));