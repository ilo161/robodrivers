const graphql = require("graphql");
const { 
    GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull
} = graphql;
const moongoose = require("moongoose");

const CarType = require("./car_type")
const UserType = require("./user_type")

const User = mongoose.model("user");
const Car = mongoose.model("car");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: () => User.find({})
        },
        user: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: (parent, { id }) => User.findById(id)
        },

    }
});

module.exports = RootQuery;