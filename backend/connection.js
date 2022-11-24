const mongoose = require("mongoose");

require('dotenv').config();




url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.nivkzh4.mongodb.net/?retryWrites=true&w=majority`;

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

const connect = mongoose.connect(url, options).then(
    () => {
        console.log("Connected to database");
    },
    err => { console.log(err) }
);

module.exports = connect