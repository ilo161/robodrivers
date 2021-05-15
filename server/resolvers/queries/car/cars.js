// const mongoose = require("mongoose");

module.exports = async(_, {}, {models}) => {
    return await models.Car.find()
}