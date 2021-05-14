const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;
const mongoose = require("mongoose");

const User = mongoose.model("user");

const CatType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        id: { type: GraphQLID},
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        money: { type: GraphQLInt }
    }
});

module.exports = UserType;