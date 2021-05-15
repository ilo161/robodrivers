const mongoose = require('mongoose');
const dbUrl = require("../config/keys").mongoURI;
const seedDb = require("../config/seeds")

const connectDb = () => {
   return mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB Successfully")
        // comment in to seed DB
        // seedDb()
    })
    .catch(err => {
        console.log(err, "Connection to DB failed")
})
}

const dbLog = mongoose.connection;

dbLog.on("error", console.error.bind(console, "MongoDB on connection error"));

module.exports = connectDb;