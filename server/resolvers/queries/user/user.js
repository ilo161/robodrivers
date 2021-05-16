const mongoose = require("mongoose");

module.exports = async(_, args, {models}) => {
    return await models.User.findById({_id: args.id})
}