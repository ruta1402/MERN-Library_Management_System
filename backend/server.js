const express = require('express');
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require('cors');

const connect = require("./connection.js");

const app = express();

app.use(cors())
app.use(express.json())

app.use('/books', require('./routes/book-routes'))
app.use('/books', require('./routes/issue-routes'))
app.use('/books', require('./routes/user-routes'))
app.listen(port, () => console.log("Server started listening on port " + port));