const users = [
    {firstName: "Ion", lastName: "Musk", money: 0, cars:[]},
    {firstName: "Wonder", lastName: "Woman", money: 0, cars:[]}
]


module.exports = class UserRespository {
    findAll(){
        return users.map(user => ({
            ...user
        }))
    }
}