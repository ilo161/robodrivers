const mongoose = require("mongoose");

module.exports = async(_, args, {models}) => {
    console.log("get Single user")
    console.log(args)
    return await models.User.findById({_id: args.id})
}