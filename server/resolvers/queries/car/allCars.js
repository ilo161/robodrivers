// const mongoose = require("mongoose");

module.exports = async(_, args, {models}) => {
    console.log("ALLCARSSS!")
    if(args.isWorking){
        return await models.Car.find({isWorking: args.isWorking})
    } else if(args.aILevel){
        return await models.Car.find({aILevel: args.aILevel})
    }
    else {
        return await models.Car.find({})
    }
}