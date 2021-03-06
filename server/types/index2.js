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
            owner: User
            url: String!

        }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        money: Int!
        cars:[Car]
    }

    type Query {
        users: [User]
        user(id: ID): User
        allCars(isWorking: Boolean, aILevel: Int): [Car]
        car(id: ID) : Car
    }

    input CreateUserInput {
        firstName: String!
        lastName: String!
        money: Int!
    }

    input UpdateUserInput {
        firstName: String
        lastName: String
        money: Int
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
        owner: ID!
        url: String!
    }

    input UpdateCarInput {
        mileage: Int
        make: String
        model: String
        color: String
        year: String
        VIN: String
        isWorking: Boolean
        isSummoned: Boolean
        hadAccident: Boolean
        maintenanceLog: [String]
        incomePerHr: Int
        aILevel: Int
        owner: ID
        url: String
    }

    type DeleteCarPayload {
        id: ID!
    }


     type Mutation {
        createCar(input: CreateCarInput!) : Car!
        updateCar(id: ID, input: UpdateCarInput!) : Car
        updateCarMany(id: [ID], input: [UpdateCarInput]!) : [Car]
        deleteCar(id: ID) : DeleteCarPayload!
        createUser(input: CreateUserInput!) : User!
        updateUser(id: ID, input: UpdateUserInput!) : User!
        deleteUser(id: ID) : DeleteUserPayload!
    }
`
