const { 
  ApolloError 
} = require('apollo-server');

module.exports = async(_parent, args, {models}) => {
    try {
        const allWorkingCars = await models.Car.find({isWorking: true})
        return allWorkingCars
    } catch(error){
        throw new ApolloError(error)
    }
}