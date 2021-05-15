module.exports = async (_, {id, input}, {models}) => {
    const userToUpdate = await models.User.findOne({_id: id})
    // models.User.findByIdAndUpdate(id,  input, {new: true, runValidator: true})
    Object.keys(input).forEach(key => {
        userToUpdate[key] = input[key];
    });

    const updatedUser = await userToUpdate.save();
    return updatedUser;
}