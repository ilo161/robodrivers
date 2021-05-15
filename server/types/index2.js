const {gql} = require("apollo-server");

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

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        money: Int!
    }

    type Query {
        users: [User]
        cars: [Car]
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

    type DeleteUserPayload {
        id: ID!
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

    type DeleteCarPayload {
        id: ID!
    }


     type Mutation {
        createCar(input: CreateCarInput!) : Car!
        updateCar(id: ID, input: UpdateCarInput!) : Car!
        deleteCar(id: ID) : DeleteCarPayload!
        createUser(input: CreateUserInput!) : User!
        updateUser(id: ID, input: UpdateUserInput!) : User!
        deleteUser(id: ID) : DeleteUserPayload!
    }
`
