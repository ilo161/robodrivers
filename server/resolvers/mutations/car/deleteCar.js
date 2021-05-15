module.exports = async (_, {id}, {models}) => {
    const carToDelete = await models.Car.deletOne({_id: id })
    return {id: id}
}