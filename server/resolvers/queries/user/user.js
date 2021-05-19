const { 
  ApolloError 
} = require('apollo-server');

module.exports = async(_, args, {models}) => {
    try{
        console.log("get Single user")
        console.log(args)
        return await models.User.findById({_id: args.id})
    } catch(error){
        throw new ApolloError(error)
    }
}