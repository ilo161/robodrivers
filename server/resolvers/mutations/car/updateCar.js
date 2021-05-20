//make sure to add error handling
const { 
  ApolloError 
} = require('apollo-server');


module.exports = async (_, {id, input}, {models}) => {
    try{

        // console.log("just solo input", input)
        const newAndUpdated = await models.Car.findByIdAndUpdate(
            {_id: id},
            input,
            {new: true,
            useFindAndModify: false}
            )

        return newAndUpdated

    } catch(error){
        throw new ApolloError(error)
    }
}

