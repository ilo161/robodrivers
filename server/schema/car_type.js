const graphql = require("graphql");
const { 
    GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} = graphql;
const mongoose = require("mongoose");

const Car = mongoose.model("car");


const CarType = new GraphQLObjectType({
    name: "CarType",
    fields: {
        id: { type: GraphQLID },
        mileage: { type: GraphQLInt },
        make: { type: GraphQLString },
        model: { type: GraphQLString },
        year:  { type: GraphQLString },
        VIN: { type: GraphQLString },
        isWorking: { type: GraphQLBoolean },
        isSummoned: { type: GraphQLBoolean },
        hadAccident: { type: GraphQLBoolean },
        maintenanceLog: { type: GraphQLList },
        incomeGenerated: { type: GraphQLInt },
        aILevel: { type: GraphQLInt }
    }
});

module.exports = CarType;