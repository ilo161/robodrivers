module.exports = async(_parent, args, {models}) => {
    console.log("in NEst USer", _parent)
    // const allCarsByOwner = await models.Car.find({ownerId: args.id})
    const allCarsByOwner = await models.Car.find({owner: _parent.id})
    console.log(allCarsByOwner)
    return allCarsByOwner
}