const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { UserSchema } = require("./User");


const CarSchema = new Schema({
    mileage: {
        type: Number,
        // required: true,
        default: 0
    },
    make: {
        type: String,
        // required: true
    },
    model: {
        type: String,
        // required: true
    },
    color: {
        type: String,
        // required: true
    },
    year: {
        type: String,
        // required: true
    },
    VIN: {
        type: String,
        // required: true
    },
    isWorking: {
        type: Boolean,
        // required: true,
        default: true
    },
    isSummoned: {
        type: Boolean,
        default: false
    },
    hadAccident: {
        type: Boolean,
        default: false
    },
    maintenanceLog: {
        type: Array
    },
    incomePerHr: {
        type: Number,
        default: 100
    },
    aILevel: {
        type: Number,
        default: 1
    },
    owner: 
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
});

// module.exports = mongoose.model("car", CarSchema);

const Car = mongoose.model("car", CarSchema);
module.exports = { Car, CarSchema }