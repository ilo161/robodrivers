// import { models } from "mongoose"
module.exports = async (_, {id}, {models}) => {
    const userToDelete = await models.User.deletOne({_id: id })
    return {id: id}
}