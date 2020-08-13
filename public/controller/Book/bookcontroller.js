
const Book = require("./book-modal/book-modal");
const Author = require("../author/author-modal/author-modal")
const objectId = require("mongoose").Types.ObjectId;


// Get all Book details
exports.GetallBook = async (req, res) => {
    try {

        const find_Book = await Book.find({
        }).populate({ path: "author" });

        if (find_Book === null) {
            res.status(404).json({
                messsage: "data Not found",
                error: ["Something went wrong! please try again later"],
            });
        } else {
            res
                .status(200)
                .json(
                    find_Book
                );
        }

    } catch (error) {
        res.status(500).json({
            messsage: "data Not found",
            error: ["Something went wrong! please try again later"],
        });
    }

}


// Add Book details
exports.AddBook = async (req, res) => {
    try {
        var Arrived_data = {
            name: req.body.name,
            isbn: req.body.isbn,
            author: req.body.Author_id,
            CreatedDate: req.body.CreatedDate
        }
        console.log(Arrived_data);
        let document = new Book(Arrived_data);
        let data = await document.save()
        if (data) {
            res
                .status(200)
                .json(
                    'data inserted'
                );
        } else {
            res.status(403).json({
                messsage: "data Not inserted",
                error: ["Something went wrong! please try again later"],
            });
        }



    } catch (error) {
        console.log(error);
        res.status(500).json({
            messsage: "data Not inserted",
            error: ["Something went wrong! please try again later"],
        });
    }

}


// Get Book details by ID
exports.GetBookbyId = async (req, res) => {
    try {

        const find_Book = await Book.findOne({
            _id: objectId(req.params.id)
        }).populate({ path: "author" });

        if (find_Book === null) {
            res.status(404).json({
                messsage: "data Not found",
                error: ["Something went wrong! please try again later"],
            });
        } else {
            res
                .status(200)
                .json(
                    find_Book
                );
        }



    } catch (error) {
        res.status(500).json({
            messsage: "data Not found",
            error: ["Something went wrong! please try again later"],
        });
    }

}


// update Book details
exports.updateBooks = async (req, res) => {
    try {
        var Arrived_data = {
            name: req.body.name,
            isbn: req.body.isbn,
            author: req.body.Author_id,
        }

        const find_book = await Book.findOne({ _id: req.body.Book_id });

        if (find_book !== null) {
            const updated_books = await Book.update(find_book, Arrived_data);
            if (updated_books !== null) {
                res
                    .status(200)
                    .json(
                        'data inserted'
                    );
            }
        } else {
            res.status(403).json({
                messsage: "data Not found",
                error: ["Something went wrong! please try again later"],
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            messsage: "data Not inserted",
            error: ["Something went wrong! please try again later"],
        });
    }

}

