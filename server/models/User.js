const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { CarSchema } = require("./Car");
// const CarSchema = require('mongoose').model('car').schema
/*
const CarSchema = new Schema({
    mileage: {
        type: Number,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    VIN: {
        type: String,
        required: true
    },
    isWorking: {
        type: Boolean,
        required: true
    },
    isSummoned: {
        type: Boolean,
        required: false
    },
    hadAccident: {
        type: Boolean,
        required: false
    },
    maintenanceLog: {
        type: Array
    },
    incomeGenerated: {
        type: Number,
        required: false
    },
    aILevel: {
        type: Number,
        required: true
    }

});
*/


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        required: true,
    },
    // cars: [CarSchema]
    cars: [
    {
      type: Schema.Types.ObjectId,
      ref: "car"
    }
  ]
});

// UserSchema.statics.addnewCar = (userId, carId) => {
//   const User = mongoose.model("user");
//   const Car = mongoose.model("car");

//   return User.findById(userId).then(foundDog => {
//     return Toy.findById(toyId).then(foundToy => {
//       foundDog.toys.push(foundToy);
//       foundToy.dogs.push(foundDog);
//       return Promise.all([foundDog.save(), foundToy.save()]).then(
//         ([savedDog, savedToy]) => savedDog
//       );
//     });
//   });
// };


// module.exports = mongoose.model("user", UserSchema);

const User = mongoose.model("user", UserSchema);
module.exports = { User,  UserSchema }