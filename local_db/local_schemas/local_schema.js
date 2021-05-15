// import CarType from "./carType"

const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

const resolvers = require("../local_resolvers/local_resolvers")

//  { id: string, make: string, model: string, year: string, VIN: string }
const CarType = new GraphQLObjectType({
    name: "Car",
    fields: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        make: {type: new GraphQLNonNull(GraphQLString)},
        model: {type: new GraphQLNonNull(GraphQLString)},
        year: {type: new GraphQLNonNull(GraphQLString)},
        VIN: {type: new GraphQLNonNull(GraphQLString)}
    }
})

const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        money: {type: new GraphQLNonNull(GraphQLInt)}
    }
})

const QueryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: () => resolvers.users    
        }


    
        
    }
})
//    cars: {
    //        type: newGraphQLList(CarType),
    //        resolve: () =>
    //    }

module.exports = new GraphQLSchema({
    query: QueryType
})