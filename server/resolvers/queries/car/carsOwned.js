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



// module.exports = async(_, args, {models}) => {
//     try {
//         return await models.Car.findById({_id: args.id})
//     } catch(error){
//         throw new ApolloError(error)
//     }
// }
