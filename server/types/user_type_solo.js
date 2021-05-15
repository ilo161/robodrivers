const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;
const {gql} = require("apollo-server")

const mongoose = require("mongoose");

module.exports = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        money: Int!
    }
`