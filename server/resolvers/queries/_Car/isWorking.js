module.exports = async(_parent, args, {models}) => {
    const allWorkingCars = await models.Car.find({isWorking: true})
    return allWorkingCars
}