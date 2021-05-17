const userMutations = require("./mutations/user/index") 
const carMutations = require("./mutations/car/index") 
const basicUserQueries = require("./queries/user/index")
const basicCarQueries = require("./queries/car/index")

const userQueries = require("./queries/_User/index")
const carQueries = require("./queries/_Car/index")


//combine all queries and mutations from cars and users into one
//export as object
module.exports = {
    Mutation: {
        ...userMutations,
        ...carMutations
    },
    Query: {
        ...basicUserQueries,
        ...basicCarQueries
    },
    Car: {
        ...carQueries
    },
    User: {
        ...userQueries

    }

}



