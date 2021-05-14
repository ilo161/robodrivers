// const express = require("express");
// const bodyParser = require("body-parser");
// const  graphqlExpress  = require("apollo-server-express").graphqlExpress;
// const schema = require("./schemas/schema")
// console.log(graphqlExpress)
// // import express from 'express';
// // import bodyParser from 'body-parser';
// // import { graphqlExpress } from 'apollo-server-express';
// // import Schema from "./schemas/schema"

// const myGraphQLSchema = schema
//  // ... define or import your schema here!
// const PORT = 5000;

// const app = express();


const { ApolloServer, gql } = require('apollo-server-express');
const app = require('express')();
const PORT = 5000;
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
// app.listen({ port: 3000 })



// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.listen(PORT)
console.log(`GraphQL server listening on port ${PORT}`);
