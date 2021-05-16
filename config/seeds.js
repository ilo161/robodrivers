const { User } = require("../server/models/User");
const { Car } = require("../server/models/Car");
const mongoose = require("mongoose");
// type User {
//         id: ID!
//         firstName: String!
//         lastName: String!
//         money: Int!
//         cars: [String!]
//     }

// type Car {
//     mileage: Int!;
//     make: String! ;
//     model: String!;
//     color: String! ;
//     year: String! ;
//     VIN: String! ;
//     isWorking: Boolean!
//     isSummoned: Boolean!
//     hadAccident: Boolean!
//     maintenanceLog: [String]
//     incomePerHr: Int!
//     aILevel: Int!
// }

const carsArr = [{
    mileage: 0,
    make: "Tesla",
    model: "Model S",
    color: "Blue",
    year: 2021,
    VIN: "tms9822",
    owner: "60a185529293eed030af2166"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model S",
    color: "Yellow",
    year: 2021,
    VIN: "tms6710",
    owner: "60a185529293eed030af2166"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model X",
    color: "Orange",
    year: 2021,
    VIN: "tmx9432",
    owner: "60a185529293eed030af2166"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model SX",
    color: "Red",
    year: 2021,
    VIN: "tmsx6718",
    owner: "60a185529293eed030af2166"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model 3",
    color: "Gray",
    year: 2021,
    VIN: "tm36710",
    owner: "60a185529293eed030af2166"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model 3X",
    color: "Green",
    year: 2021,
    VIN: "tm3x6382",
    owner: "60a185529293eed030af2166"
}, {
    mileage: 0,
    make: "Lucid",
    model: "Lumen",
    color: "Purple",
    year: 2021,
    VIN: "ll17673",
    owner: "60a185529293eed030af2167"
}, {
    mileage: 0,
    make: "Lucid",
    model: "Lumen 2",
    color: "Pink",
    year: 2021,
    VIN: "ll28903",
    owner: "60a185529293eed030af2167"
}, {
    mileage: 0,
    make: "Photon",
    model: "Mc2",
    color: "White",
    year: 2021,
    VIN: "pmc21972",
    owner: "60a185529293eed030af2167"
}, {
    mileage: 0,
    make: "Photon",
    model: "Mc3",
    color: "Lime",
    year: 2021,
    VIN: "pmc36732",
    owner: "60a185529293eed030af2167"
}, {
    mileage: 0,
    make: "Cyber",
    model: "0ms",
    color: "Black",
    year: 2021,
    VIN: "c01724",
    owner: "60a185529293eed030af2167"
}, {
    mileage: 0,
    make: "Cyber",
    model: "10ms",
    color: "Teal",
    year: 2021,
    VIN: "c108975",
    owner: "60a185529293eed030af2167"
}
]

const usersArr = [
    {firstName: "Ion", lastName: "Musk", money: 0, cars:[]},
    {firstName: "Wonder", lastName: "Woman", money: 0, cars:[]}
]

// const seedDb = () => {
//     //drop cars table and make seeds
//     /* comment in to drop db
//      mongoose.connection.collections.cars.drop(function(){
//             console.log("cars db dropped")

//             carsArr.forEach(carKeys => {
//                 const newCar = new Car(carKeys)
//                 newCar.save()
//                 .then(console.log(`car: ${carKeys.make} ${carKeys.model} created`))
//             })
//             console.log("making cars DONE")
//     })
//     // */

//     // mongoose.connection.collections.users.drop(function() {
//     // //  const carsOwnedArray = [
//     // //         "609f5f6e782666b11eefd377",
//     // //         "609f5f6e782666b11eefd378",
//     // //         "609f5f6e782666b11eefd379",
//     // //         "609f5f6e782666b11eefd37a",
//     // //         "609f5f6e782666b11eefd37b",
//     // //         "609f5f6e782666b11eefd37c",
//     // //         "609f5f6e782666b11eefd37d",
//     // //         "609f5f6e782666b11eefd380",
//     // //         "609f5f6e782666b11eefd37f",
//     // //         "609f5f6e782666b11eefd37e",
//     // //         "609f5f6e782666b11eefd381",
//     // //         "609f5f6e782666b11eefd382"
//     // //     ]
        
//     //     //make users and attach IDs s Strings
        
//     //     // usersArr.forEach((userKeys, idx) => {
//     //     //     const startCarCountAt = [0,6];
//     //     //     let count = 0
//     //     //     let end = startCarCountAt[idx] + 6;

//     //     //     console.log("making User")
//     //     //     const newUser = new User(userKeys)

//     //     //     for (let i = startCarCountAt[idx]; i < end; i++){
//     //     //         newUser.cars.push(carsOwnedArray[i])
//     //     //         console.log("add car")
//     //     //     }


//     //     //     newUser.save()
//     //     //     .then(console.log(`user: ${userKeys.firstName} ${newUser.cars} created`))
            
//     //     // })

//     //     //make solo users without populating Car's array with ObjIDs
//     //     usersArr.forEach((userKeys, idx) => {
//     //         console.log("making User")
//     //         const newUser = new User(userKeys)

//     //         newUser.save()
//     //         .then(console.log(`user: ${userKeys.firstName} ${newUser.cars} created`))
        
//     //     })
//     // })
// }
const seedDb = async () => {
    const carsOwnedArray = []
    

    const allCars = await Car.find({})
    //allCars if Object
    // allCarsKeys = Object.keys(allCars)
    for(let id in allCars){
        for(let key in allCars[id]){
            if(key === "_id"){
                // console.log(allCars[id][key])
                carsOwnedArray.push(allCars[id][key])
            }
        }
    }
    let carsPart1 = carsOwnedArray.slice(0,6)
    let carsPart2 = carsOwnedArray.slice(6,12)

    console.log(carsPart1)
    console.log(carsPart2)

    // { $concat: { cars: carspart1 }},
    // User.findOneAndUpdate(
    //     { _id: "60a185529293eed030af2166" },
    //     { "$push": { "cars": { "$each": carsPart1 }}},
    //     {returnOriginal: false, useFindAndModify: false }
    // ).then(user => user.save())

    // { $concat: { cars: carspart2 }},
    // User.findOneAndUpdate(
    //     { _id: "60a185529293eed030af2167" },
    //     { "$push": { "cars": { "$each": carsPart2 }}},
    //     {returnOriginal: false, useFindAndModify: false }
    // ).then((user)=> user.save())

}

// Friend.findOneAndUpdate(
//    { _id: req.body.id }, 
//    { $push: { friends: objFriends  } },
//   function (error, success) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(success);
//         }
//     });
// )





//  const newUser = new User(usersArr[0])
//  newUser.save()
// const test = new User(usersArr[0])

// const seedDb = () => {
    //drop cars table and make seeds
    //  mongoose.connection.collections.cars.drop(function(){
    //         console.log("cars db dropped")

    //         carsArr.forEach(carKeys => {
    //             const newCar = new Car(carKeys)
    //             newCar.save()
    //             .then(console.log(`car: ${carKeys.make} ${carKeys.model} created`))
    //         })
    //         console.log("making cars DONE")
    //     })
 


    /* Promise attempt. next time make a promise resolver check function
     *** ask a mentor
            const allCarsFromDbFn = async (resolve) => {
                const carsObj = await Car.find({}, function(err, cars){
                    const allCars = {};

                    cars.forEach(car => allCars[car._id] = car)

                    return allCars
                })
                // return carsObj
                resolve(carsObj)
            }

            const allCarsIds = new Promise((resolve, reject) => {
                allCarsFromDbFn(resolve)
                .then((promise) => resolve(promise.map(car => car._id)))
            })

            // allCarsFromDbFn()
            // .then((promise) => console.log(promise.forEach(car => console.log(car._id))))

            // allCarsIds.then((arr) => console.log("all", arr))
    */


        
       


   

  
// const seedDb = () => {
//     console.log("YES")
// }

module.exports = seedDb;  