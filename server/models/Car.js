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
        required: true
    },
    isSummoned: {
        type: Boolean,
        required: false
    },
    hadAccident: {
        type: Boolean,
        required: false
    },
    maintenanceLog: {
        type: Array
    },
    incomeGenerated: {
        type: Number,
        required: false
    },
    aILevel: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("car", CarSchema);