const createUser = require("./createUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");

// might need a delete car function here since it's relational... not sure...

module.exports = {
    createUser,
    updateUser,
    deleteUser
}