const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;
const {gql} = require("apollo-server")

const mongoose = require("mongoose");


// const Car = mongoose.model("car");

/* 
***********************************
**** with apollo-server syntax ****
***********************************
*/
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

    type Query {
        cars: [Car]
    }

    input CreateCarInput {
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

    input UpdateCarInput {
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

    type DeletePayload {
        id: ID!
    }


    type Mutation {
        createCar(input: CreateCarInput!) : Car!
        updateCar(id: ID, input: UpdateCarInput!) : Car!
        deleteCar(id: ID) : DeletePayload!
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

// const CarType = new GraphQLObjectType({
//     name: "CarType",
//     fields: {
//         id: { type: GraphQLID },
//         mileage: { type: GraphQLInt },
//         make: { type: GraphQLString },
//         model: { type: GraphQLString },
//         year:  { type: GraphQLString },
//         VIN: { type: GraphQLString },
//         isWorking: { type: GraphQLBoolean },
//         isSummoned: { type: GraphQLBoolean },
//         hadAccident: { type: GraphQLBoolean },
//         maintenanceLog: { type: GraphQLList },
//         incomeGenerated: { type: GraphQLInt },
//         aILevel: { type: GraphQLInt }
//     }
// });

// module.exports = CarType;

/*
***********************************
**** graphql syntax end ****
***********************************
*/