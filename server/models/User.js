const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CarSchema = require("./Car");

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        required: true,
    },
    cars: [CarSchema]
});

module.exports = mongoose.model("user", UserSchema);