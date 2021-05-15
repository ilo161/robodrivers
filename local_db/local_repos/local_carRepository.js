/*
  fields: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        make: {type: new GraphQLNonNull(GraphQLString)},
        model: {type: new GraphQLNonNull(GraphQLString)},
        year: {type: new GraphQLNonNull(GraphQLString)},
        VIN: {type: new GraphQLNonNull(GraphQLString)}
    }
*/

const cars = [{
    mileage: 0,
    make: "Tesla",
    model: "Model S",
    color: "Blue",
    year: 2021,
    VIN: "tms9822"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model S",
    color: "Yellow",
    year: 2021,
    VIN: "tms6710"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model X",
    color: "Orange",
    year: 2021,
    VIN: "tmx9432"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model SX",
    color: "Red",
    year: 2021,
    VIN: "tmsx6718"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model 3",
    color: "Gray",
    year: 2021,
    VIN: "tm36710"
}, {
    mileage: 0,
    make: "Tesla",
    model: "Model 3X",
    color: "Green",
    year: 2021,
    VIN: "tm3x6382"
}, {
    mileage: 0,
    make: "Lucid",
    model: "Lumen",
    color: "Purple",
    year: 2021,
    VIN: "ll17673"
}, {
    mileage: 0,
    make: "Lucid",
    model: "Lumen 2",
    color: "Pink",
    year: 2021,
    VIN: "ll28903"
}, {
    mileage: 0,
    make: "Photon",
    model: "Mc2",
    color: "White",
    year: 2021,
    VIN: "pmc21972"
}, {
    mileage: 0,
    make: "Photon",
    model: "Mc3",
    color: "Lime",
    year: 2021,
    VIN: "pmc36732"
}, {
    mileage: 0,
    make: "Cyber",
    model: "0ms",
    color: "Black",
    year: 2021,
    VIN: "c01724"
}, {
    mileage: 0,
    make: "Cyber",
    model: "10ms",
    color: "Teal",
    year: 2021,
    VIN: "c108975"
}
]

// custom resolver
module.exports = class CarRepository {
    findByIds(ids){
        return cars.filter(car => ids.some(id => car.id === id))
    }
}
    
