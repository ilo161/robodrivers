// const Car = require("./car_type");
// const User = require("./user_type");


// This exports to ApolloServer Instance under key typeDefs accepts an array
// module.exports = [User]

/* exporting as an array gives me an error that reads cannot declare duplicate
    Query or Mutation
    . source: each type, i.e user/car each have their own gql ` ` export
    hence the duplication!

    // module.exports = [Car, User]
*/

    