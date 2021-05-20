const { 
  ApolloError 
} = require('apollo-server');

module.exports = async(_, {}, {models}) => {
    try {
        return await models.User.find()
    } catch(error){
        throw new ApolloError(error)
    }
}