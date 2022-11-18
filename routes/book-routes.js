const express = require("express");

const router = express.Router();
const Book = require("../model/Book");


router.get("/", async(req, res, next) => {
    //This route will give all books
    let books;
    try {
        books = await Book.find();
    } catch (err) { console.log(err) };

    if (!books) {
        return res.status(404).json({ message: "Not found" })
    }
    return res.status(200).json({ books })
});

module.exports = router;