const collectionName = "Author";

const collectionSchema = {
    firstName: String,
    lastName: String,
    CreatedDate:
    {
        type: Date,
        default: Date.now,
    },
};

module.exports = require("../../../modal-helper/index")(collectionSchema, collectionName);
