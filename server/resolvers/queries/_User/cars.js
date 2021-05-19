const { 
  ApolloError 
} = require('apollo-server');

module.exports = async(_parent, args, {models}) => {
    try{
        console.log("user > cars")
        // console.log("in NEst USer", _parent)
        // const allCarsByOwner = await models.Car.find({ownerId: args.id})
        const allCarsByOwner = await models.Car.find({owner: _parent.id})
        // console.log(allCarsByOwner)
        return allCarsByOwner
    }
    catch(error){
        throw new ApolloError(error)
    }
}