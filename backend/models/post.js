const mongoose = require("mongoose")    

const Schema = mongoose

const postSchema = new Schema({
    title: String,
    text: String,
    timestamp: Date,
    published: Boolean,
    author: {type: Schema.Types.ObjectId, ref: "Author", required: true}
})
