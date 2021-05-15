const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CarSchema = new Schema({
    mileage: {
        type: Number,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    VIN: {
        type: String,
        required: true
    },
    isWorking: {
        type: Boolean,
        required: true,
        default: true
    },
    isSummoned: {
        type: Boolean,
        required: false,
        default: false
    },
    hadAccident: {
        type: Boolean,
        required: false,
        default: false
    },
    maintenanceLog: {
        type: Array
    },
    incomePerHr: {
        type: Number,
        required: false,
        default: 100
    },
    aILevel: {
        type: Number,
        required: true,
        default: 1
    }

});

// module.exports = mongoose.model("car", CarSchema);

const Car = mongoose.model("car", CarSchema);
module.exports = { Car }