const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;
const {gql} = require("apollo-server")

const mongoose = require("mongoose");

// const User = mongoose.model("user");

/* 
***********************************
**** with apollo-server syntax ****
***********************************
*/
module.exports = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        money: Int!
        cars: [String]
    }

    type Query {
        users: [User]
    }

    input CreateUserInput {
        firstName: String!
        lastName: String!
        money: Int!
    }

    input UpdateUserInput {
        firstName: String!
        lastName: String!
        money: Int!
    }

    type DeletePayload {
        id: ID!
    }


    type Mutation {
        createUser(input: CreateUserInput!) : User!
        updateUser(id: ID, input: UpdateUserInput!) : User!
        deleteUser(id: ID) : DeletePayload!
    }
`

/*
***********************************
******apollo-server-syntax end ****
***********************************
*/
// --------------------------------
/*
***********************************
**** with graphql syntax below ****
***********************************
*/

// const UserType = new GraphQLObjectType({
//     name: "UserType",
//     fields: {
//         id: { type: GraphQLID},
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         money: { type: GraphQLInt }
//     }
// });

// module.exports = UserType;
/*
***********************************
**** graphql syntax end ****
***********************************
*/
