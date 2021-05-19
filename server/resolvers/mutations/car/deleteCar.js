const { 
  ApolloError 
} = require('apollo-server');

module.exports = async (_, {id}, {models}) => {
    try{
        const carToDelete = await models.Car.deletOne({_id: id })
        return {id: id}
    }
    catch(error){
        throw new ApolloError(error)
    }
}