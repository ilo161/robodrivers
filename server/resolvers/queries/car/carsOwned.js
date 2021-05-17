// const mongoose = require("mongoose");

module.exports = async(_, {}, {models}) => {
    // const allCars = await Car.find({})
    // const allCars = await Car.find({owner: _._id})
    // console.log("_", _)
    // console.log(allCars)
    
    // return allCars.filter(carObj => carObj === _.id)
    
    // return await models.Car.find()

    // return Car.find({})
    return await models.Car.find({owner: _.id})
}