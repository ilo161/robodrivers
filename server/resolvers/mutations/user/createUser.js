module.exports = async (_, {input}, {models}) => {
    const newUser = await models.User.create(input)
    return newUser;
}