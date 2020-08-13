
const Author = require("./author-modal/author-modal");

const objectId = require("mongoose").Types.ObjectId;


// Get all author details
exports.GetallAuthor = async (req, res) => {
    try {

        const find_author = await Author.find({}).lean();
        if (find_author === null) {
            res.status(404).json({
                messsage: "data Not found",
                error: ["Something went wrong! please try again later"],
            });
        } else {
            res
                .status(200)
                .json(
                    find_author
                );
        }

    } catch (error) {
        res.status(500).json({
            messsage: "data Not found",
            error: ["Something went wrong! please try again later"],
        });
    }

}


// Add author details
exports.AddAuthor = async (req, res) => {
    try {
        var Arrived_data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            CreatedDate: req.body.CreatedDate
        }
        console.log(Arrived_data);
        let document = new Author(Arrived_data);
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


// Get author details by ID
exports.GetauthorbyId = async (req, res) => {
    try {

        const find_author = await Author.findOne({ _id: objectId(req.params.id) }).lean();
        if (find_author === null) {
            res.status(404).json({
                messsage: "data Not found",
                error: ["Something went wrong! please try again later"],
            });
        } else {
            res
                .status(200)
                .json(
                    find_author
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
exports.updateAuthor = async (req, res) => {
    try {
        var Arrived_data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }

        const find_Author = await Author.findOne({ _id: req.body.Auth_id });

        if (find_Author !== null) {
            const updated_author = await Author.update(find_Author, Arrived_data);
            if (updated_author !== null) {
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


