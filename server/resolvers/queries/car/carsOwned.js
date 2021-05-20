const { 
  ApolloError 
} = require('apollo-server');

module.exports = async(_, {}, {models}) => {
   try{
    return await models.Car.find({owner: _.id})
   } catch(error){
        throw new ApolloError(error)
    }
}

