//make sure to add error handling
const { 
  ApolloError 
} = require('apollo-server');


module.exports = async (_, {id, input}, {models}) => {
// module.exports = async (_, args, {models}) => {
    console.log("are u okay?")
    try{
        console.log("Correct Batch location", id)
        console.log("Correct Batch location", input)

            // const {id, input} = args
        console.log("updating...MANY")
        const completedBatch = []

        for(let batchId = 0; batchId < id.length; batchId++){
            // console.log("pre update", "isW", input[batchId].isWorking, "} isSum", input[batchId].isSummoned)
            const isWorkingObj = {isWorking: input[batchId].isWorking ? false : true}
            const isSummonedObj = {isSummoned: input[batchId].isSummoned ? false : true}
            const newInputObj = {...isWorkingObj, ...isSummonedObj}

            console.log("about to update",id[batchId] , newInputObj)

            const newAndUpdated = await models.Car.findByIdAndUpdate(
                {_id: id[batchId]},
                newInputObj,
                {new: true,
                useFindAndModify: false}
                )
                
            //     {_id: id},
            // input,
            // {new: true,
            // useFindAndModify: false}
            // )
                // console.log("WWF",newAndUpdated)
                completedBatch.push(newAndUpdated)
        }
        // console.log("the batch", completedBatch)
        return completedBatch

        //     const newAndUpdated = await models.Car.findByIdAndUpdate(
        //     {_id: id},
        //     input,
        //     {new: true,
        //     useFindAndModify: false}
        //     )

        // return newAndUpdated

        } catch(error){
             throw new ApolloError(error)
         }
        //OG
        // const newAndUpdated = await models.Car.findByIdAndUpdate(
        //     {_id: id},
        //     input,
        //     {new: true,
        //     useFindAndModify: false}
        //     )

        // return newAndUpdated

    /*
        const carToUpdate = await models.Car.findOne({_id: id})
        // models.User.findByIdAndUpdate(id,  input, {new: true, runValidator: true})
        console.log("UPDATE CAR!")
        Object.keys(input).forEach(key => {
            if(key === "aILevel"){
                carToUpdate[key] += 1;
                carToUpdate["incomePerHr"] = (carToUpdate["aILevel"] * carToUpdate["incomePerHr"]) / 2
            } else {
                carToUpdate[key] = input[key];
            } 
            
        });

*/
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

/*

        return await carToUpdate.save(function(err, savedObj){
            if(err){
                throw err;
            } else {
               console.log("return update obj", savedObj)
               return savedObj

            } 
                // else if(!savedObj) throw new Error("no Document Model Found")
        });


*/
        // console.log("so close return", updatedCar)
        // return updatedCar;

     
}

