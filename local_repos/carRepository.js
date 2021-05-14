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
    id: 1,
    make: "Tesla",
    model: "Model S",
    year: 2021,
    VIN: "tms9822"
}, {
    id: 2,
    make: "Tesla",
    model: "Model S",
    year: 2021,
    VIN: "tms6710"
}, {
    id: 3,
    make: "Tesla",
    model: "Model X",
    year: 2021,
    VIN: "tmx9432"
}, {
    id: 4,
    make: "Tesla",
    model: "Model SX",
    year: 2021,
    VIN: "tmsx6718"
}, {
    id: 5,
    make: "Tesla",
    model: "Model 3",
    year: 2021,
    VIN: "tm36710"
}, {
    id: 6,
    make: "Tesla",
    model: "Model 3X",
    year: 2021,
    VIN: "tm3x6382"
}, {
    id: 7,
    make: "Lucid",
    model: "Lumen",
    year: 2021,
    VIN: "ll17673"
}, {
    id: 8,
    make: "Lucid",
    model: "Lumen 2",
    year: 2021,
    VIN: "ll28903"
}, {
    id: 9,
    make: "Photon",
    model: "Mc2",
    year: 2021,
    VIN: "pmc21972"
}, {
    id: 10,
    make: "Photon",
    model: "Mc3",
    year: 2021,
    VIN: "pmc36732"
}, {
    id: 11,
    make: "Cyber",
    model: "0ms",
    year: 2021,
    VIN: "c01724"
}, {
    id: 12,
    make: "Cyber",
    model: "10ms",
    year: 2021,
    VIN: "c108975"
}, 
]

module.exports = class CarRepository {
    findByIds(ids){
        return cars.filter(car => ids.some(id => car.id === id))
    }
}
    
