const collectionName = "Book";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const collectionSchema = {
    name: String,
    isbn: String,
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    CreatedDate:
    {
        type: Date,
        default: Date.now,
    },
};

module.exports = require("../../../modal-helper/index")(collectionSchema, collectionName);
