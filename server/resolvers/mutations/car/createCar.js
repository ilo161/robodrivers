module.exports = async (_, {input}, {models}) => {
    const newCar = await models.Car.create(input)
    return newCar;
}