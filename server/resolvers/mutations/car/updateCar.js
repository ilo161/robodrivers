//make sure to add error handling
const { 
  ApolloServer,
  ApolloError 
} = require('apollo-server');


module.exports = async (_, {id, input}, {models}) => {
    try{

    
        const carToUpdate = await models.Car.findOne({_id: id})
        // models.User.findByIdAndUpdate(id,  input, {new: true, runValidator: true})
        console.log("UPDATE CAR!")
        Object.keys(input).forEach(key => {
            if(key === "aILevel"){
                carToUpdate[key] += 1;
                carToUpdate["incomePerHr"] *= carToUpdate["aILevel"]
            } else {
                carToUpdate[key] = input[key];
            } 
            
        });

//     instance.save(function(err,savedObj){
//     // some error occurs during save
//     if(err) throw err;
//     // for some reason no saved obj return
//     else if(!savedObj) throw new Error("no object found") 
//     else console.log(savedObj);
// })

        // const updatedCar = await carToUpdate.save((err, savedObj) => {
        //     if(err){
        //         throw err;
        //     } else {
        //        console.log("return update obj", savedObj)
        //        return savedObj

        //     } 
        //         // else if(!savedObj) throw new Error("no Document Model Found")
        // });
        return await carToUpdate.save(function(err, savedObj){
            if(err){
                throw err;
            } else {
               console.log("return update obj", savedObj)
               return savedObj

            } 
                // else if(!savedObj) throw new Error("no Document Model Found")
        });
        // console.log("so close return", updatedCar)
        // return updatedCar;

    } catch(error){
        throw new ApolloError(error)
    }
}

