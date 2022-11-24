const Book = require("../model/book.js");

//@description : Get Books
//@route  : GET /books
//@access : Private
const getBooks = async(req, res) => {
    let books
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({ message: "Catalogue is empty" })
    }
    return res.status(200).json({ books })
}

//@description : Create Books
//@route  : POST /books
//@access : Private
const createBooks = async(req, res) => {
    // if (!req.body.text) {
    //     res.status(400).json({ message: "Add a text field" })
    // }
    const { name, author, description, genre, quantity } = req.body;

    let book;
    let available = false;

    if (quantity > 0) {
        available = true
    }
    try {
        book = new Book({
            name,
            author,
            description,
            genre,
            quantity,
            available
        });
        await book.save();
    } catch (err) { console.log(err) }

    if (!book) {
        return res.status(500).json({ message: "Cannot add the book" })
    }
    return res.status(200).json({ book })

}

//@description : Update Books
//@route  : PUT /books/:id
//@access : Private
const updateBooks = async(req, res) => {
    const { name, author, description, genre, quantity } = req.body;
    let books
    const id = req.params.id;
    let available = false;
    if (quantity > 0) {
        available = true
    }
    try {
        books = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            genre,
            quantity,
            available
        });
        books = await books.save()

    } catch (err) {
        console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: "Cannot update" })
    }
    return res.status(200).json({ books })
}

//@description : Delete Books
//@route  : DELETE /books/:id
//@access : Private
const deleteBooks = async(req, res) => {
    let books
    const id = req.params.id;
    try {
        books = await Book.findByIdAndRemove(id);

    } catch (err) {
        console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: "Cannot delete" })
    }
    return res.status(200).json({ message: "Successfully deleted" })
}

//@description : Search Books
//@route  : GET /books/:id
//@access : Private
const searchBook = async(req, res, next) => {
    const id = req.params.id;
    let books
    try {
        books = await Book.find({
            "$or": [
                { name: { $regex: id, $options: "i" } },
                { author: { $regex: id, $options: "i" } },
                { genre: { $regex: id, $options: "i" } }
            ]
        });

    } catch (err) {
        console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: "Book not found" })
    }
    return res.status(200).json({ books })
}




module.exports = {
    getBooks,
    createBooks,
    updateBooks,
    deleteBooks,
    searchBook
}