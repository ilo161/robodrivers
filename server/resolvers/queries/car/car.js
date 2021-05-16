module.exports = async(_, args, {models}) => {
    return await models.Car.findById({_id: args.id})
}
