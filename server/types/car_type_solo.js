const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;
const {gql} = require("apollo-server")

const mongoose = require("mongoose");

module.exports = gql`
    type Car {
            id: ID!
            mileage: Int!
            make: String!
            model: String!
            color: String!
            year: String!
            VIN: String!
            isWorking: Boolean!
            isSummoned: Boolean!
            hadAccident: Boolean!
            maintenanceLog: [String]
            incomePerHr: Int!
            aILevel: Int!

        }
`