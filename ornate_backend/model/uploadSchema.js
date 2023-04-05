const mongoose = require("mongoose");

const Schema = mongoose.Schema

const uploadSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    tag: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Upload", uploadSchema)