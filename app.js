const express = require('express');
const mongoose = require("mongoose");

const router = require("./routes/book-routes")

const app = express();


//Middleware
app.use("./books", router);




mongoose.connect("mongodb+srv://admin:RgkTJoDSzkDlJcXq@cluster0.nivkzh4.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected to database")).then(() => {
    app.listen(5000);
}).catch((err) => console.log(err));