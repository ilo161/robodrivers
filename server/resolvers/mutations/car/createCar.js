const { 
  ApolloError 
} = require('apollo-server');

module.exports = async (_, {input}, {models}) => {
    try {
        const newCar = await models.Car.create(input)
        return newCar;
    } catch(error){
        throw new ApolloError(error)
    }
}