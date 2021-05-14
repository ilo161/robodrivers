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
const mongoose = require('mongoose');
const express = require("express")
const app = express();
const db = require("./config/keys").mongoURI;

//connect to mongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Successfully"))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Hello World"));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

