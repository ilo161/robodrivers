const users = [{
    id: 1,
    firstName: 'Ion',
    lastName: 'Musk',
    money: 2100100,
    carsIds: [1,2,3,4,5,6]
}, {
    id: 2,
    firstName: 'Wonder',
    lastName: 'Woman',
    money: 2200200,
    carsIds: [7,8,9,10,11,12]
}];


module.exports = class UserRespository {
    findAll(){
        return users.map(user => ({
            ...user
        }))
    }
}