const mongoose = require("mongoose");
const User = require("../models/User")


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