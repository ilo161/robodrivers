const { 
  ApolloError 
} = require('apollo-server');


module.exports = async(_parent, args, { models }) => {
    try{
        // console.log("_CAR > owner")
        const theOwner = await models.User.findById({_id: _parent.owner})
        return theOwner
    } catch(error){
        throw new ApolloError(error)
    }
    
}