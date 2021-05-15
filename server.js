// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const  graphqlExpress  = require("apollo-server-express").graphqlExpress;
// // const schema = require("./schemas/schema")
// // console.log(graphqlExpress)
// // // import express from 'express';
// // // import bodyParser from 'body-parser';
// // // import { graphqlExpress } from 'apollo-server-express';
// // // import Schema from "./schemas/schema"

// // const myGraphQLSchema = schema
// //  // ... define or import your schema here!
// // const PORT = 5000;

// // const app = express();


// // const app = require('express')();
// const { ApolloServer, makeExecutableSchema} = require('apollo-server');
// const PORT = 5000;

// const typeDefs = `
//     type Query {
//         user
//     }
// `





// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app });
// // app.listen({ port: 3000 })



// // bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
// app.listen(PORT)
// console.log(`GraphQL server listening on port ${PORT}`);
// const express = require("express")
// const app = express();
// const mongoose = require('mongoose');
// const db = require("./config/keys").mongoURI;
// const User = require("./server/models/User")







/// new tutorial apollo-server
const { ApolloServer } = require("apollo-server");
//v1
// this export fails because duplicate key Query or Mutation
// const typeDefs = require("./server/types/index");

//v2
const typeDefs = require("./server/types/index2");

const resolvers = require("./server/resolvers/index");
// models becomes the "global context" for ApolloServer
const models = require("./server/models/index");
const connectDb = require("./server/connectDb")


//connect to mongoDB
// mongoose
//     .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connected to MongoDB Successfully"))
//     .catch(err => console.log(err))

connectDb();

const PORT = process.env.PORT || 5001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {models}
})

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Apollo Server Ready at ${url}`)
});

// app.get("/", (req, res) => res.send("Hello World"));
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
/*
const goku = new User({
    firstName: "Super",
    lastName: "Saiyan",
    money: 100,
    cars:[]
})
console.log(goku)

goku.save()
    .then(function(){
    User.findOne({firstName:"Super"}).then(function(record){
        console.log(record.money)
        })
    })
    .catch(err => console.log(err))
    */

