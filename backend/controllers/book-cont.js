//@description : Get Books
//@route  : GET /books
//@access : Private
const getBooks = (req, res) => {
    res.status(200).json({ message: "Get books" })
}

//@description : Create Books
//@route  : POST /books
//@access : Private
const createBooks = (req, res) => {
    // if (!req.body.text) {
    //     res.status(400).json({ message: "Add a text field" })
    // }
    res.status(200).json({ message: "Create books" })

}

//@description : Update Books
//@route  : PUT /books/:id
//@access : Private
const updateBooks = (req, res) => {
    res.status(200).json({ message: `Update books ${req.params.id}` })
}

//@description : Delete Books
//@route  : DELETE /books/:id
//@access : Private
const deleteBooks = (req, res) => {
    res.status(200).json({ message: `Delete books ${req.params.id}` })
}



module.exports = {
    getBooks,
    createBooks,
    updateBooks,
    deleteBooks
}