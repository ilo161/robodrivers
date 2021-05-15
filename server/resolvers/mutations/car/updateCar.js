//make sure to add error handling

module.exports = async (_, {id, input}, {models}) => {
    const carToUpdate = await models.Car.findOne({_id: id})
    // models.User.findByIdAndUpdate(id,  input, {new: true, runValidator: true})
    Object.keys(input).forEach(key => {
        if(key === "aILevel"){
            carToUpdate[key] += 1;
        } else {
            carToUpdate[key] = input[key];
        } 
        
    });

    const updatedCar = await carToUpdate.save();
    return updatedCar;
}

