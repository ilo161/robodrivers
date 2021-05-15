const userMutations = require("./mutations/user/index") 
const carMutations = require("./mutations/car/index") 
const userQueries = require("./queries/user/index")
const carQueries = require("./queries/car/index")


//combine all queries and mutations from cars and users into one
//export as object
module.exports = {
    Mutation: {
        ...userMutations,
        ...carMutations
    },
    Query: {
        ...userQueries,
        ...carQueries
    }
}



