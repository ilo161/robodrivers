# README
## Robodrivers

#### In this century, your car works for you. Send your fully autonomous car out to generate passive income and help the community commute.

### Technologies Used
 * MongoDb 
 * Mongoose
 * GraphQL
 * Apollo-Server
 * ApolloClient (Connect backend Apollo Server to FrontEnd => React)
   * Apollo InMemoryCache
 * GraphiQL
 * Material-UI
 * React
 * CSS

 #### Future plans for project
    * Utilize React Hooks to display money made in real time.
        * Introduce "days" i.e. 24 hour days and money made per day
    * Fix Center Button to Unfilter query results
    * Beautify top section of Users Box
    * Introduce Accidents and Cars unable to work until maintenance if performed.
    * Introduce maintenance log of mechanic history
    * Ability to transfer car to other user via "sale"
    * Introduce EarthQuake to add "accident" to vehicle
    * Introduce Weather to affect rate of accident (Rain, snow...)


### HomePage 
 
 Up top you will find the Two Users listed with their 
 * First Name
 * Last Name
 * Total Money on hand

 The next section is an index container of all cars that are owned by both users
 and which are either working(making money) or summoned(not making money).

### Functionality and Function
    * Note: Cars are upgradeable. The higher their Ai-Level. The higher the income.
 #### User may...
    * Hyre all cars belonging to one User as a batch function.
    * Summoned and Retire all cars belonging to one User as a batch function.
    * Upgrade all cars belonging to one User as a batch function.
        * This will upgrade level by one and increase income.
    * Hyre an individual car.
    * Summon an individual car.
    * Upgrade an individual car.
    * Filter Cache by cars owned by one user.

### Screenshots

#### Detail of Car Card
![Detail of Car Card](https://github.com/ilo161/robodrivers/blob/main/publiq/detail_of_car_card.png "Detail of Car Card")

#### Batch Buttons
![Batch Buttons](https://github.com/ilo161/robodrivers/blob/main/publiq/batch_buttons.png "Batch Buttons")
   
#### Single Function Buttons
![Single Function Buttons](https://github.com/ilo161/robodrivers/blob/main/publiq/indiv_commands.png "Single Function Buttons")

-----

#### Before Image of Upgrade AI Batch
![Before Image of Upgrade AI Batch](https://github.com/ilo161/robodrivers/blob/main/publiq/ai_level_before.png "Before Image of Upgrade AI Batch")

#### After Image of Upgrade AI Batch
![After Image of Upgrade AI Batch](https://github.com/ilo161/robodrivers/blob/main/publiq/ai_level_after.png "After Image of Upgrade AI Batch")

________
#### Image of All Cars Hyred. Notice the Green border
![Image of All Cars Hyred. Notice the Green border](https://github.com/ilo161/robodrivers/blob/main/publiq/batch_is_hyred.png "Image of All Cars Hyred. Notice the Green border")

#### Image of All Cars Parked. Notice the Red border
![Image of All Cars Parked. Notice the Red border](https://github.com/ilo161/robodrivers/blob/main/publiq/batch_is_parked.png "Image of All Cars Parked. Notice the Red border")


-----
#### Filter By User 1
![Filter By User 1](https://github.com/ilo161/robodrivers/blob/main/publiq/filter_user_1.png "Filter By User 1")

#### Filter By User 2
![Filter By User 2](https://github.com/ilo161/robodrivers/blob/main/publiq/filter_user_2.png "Filter By User 2")

-----

#### Responsive Design Lrg
![Responsive Design Lrg](https://github.com/ilo161/robodrivers/blob/main/publiq/responsive_lrg.png "Responsive Design Lrg")

#### Responsive Design Med
![Responsive Design Med](https://github.com/ilo161/robodrivers/blob/main/publiq/responsive_md.png "Responsive Design Med")

#### Responsive Design Small
![Responsive Design Small](https://github.com/ilo161/robodrivers/blob/main/publiq/responsive_sm.png "Responsive Design Small")

### Code

#### User GraphQL Schema
```
type User {
        id: ID!
        firstName: String!
        lastName: String!
        money: Int!
        cars:[Car]
    }
```

#### Car GraphQL Schema
```
type Car {
            id: ID!
            mileage: Int!
            make: String!
            model: String!
            color: String!
            year: String!
            VIN: String!
            isWorking: Boolean!
            isSummoned: Boolean!
            hadAccident: Boolean!
            maintenanceLog: [String]
            incomePerHr: Int!
            aILevel: Int!
            owner: User
            url: String!

        }
```

#### Top Level Queries
```
type Query {
        users: [User]
        user(id: ID): User
        allCars(isWorking: Boolean, aILevel: Int): [Car]
        car(id: ID) : Car
    }
```


#### Mutation Parameters
```
type Mutation {
        createCar(input: CreateCarInput!) : Car!
        updateCar(id: ID, input: UpdateCarInput!) : Car
        updateCarMany(id: [ID], input: [UpdateCarInput]!) : [Car]
        deleteCar(id: ID) : DeleteCarPayload!
        createUser(input: CreateUserInput!) : User!
        updateUser(id: ID, input: UpdateUserInput!) : User!
        deleteUser(id: ID) : DeleteUserPayload!
    }
```

#### One Query to Rule them all

This Query fires on page load to be a master data object for trickling into all components

```
// This has two keys. all cars and users. to prevent double query
export const ALL_CARS = gql`
query getAllCarsWithUsers {
 allCars {
    id
    make
    model
    mileage
    year
    aILevel
    incomePerHr
    isWorking
    isSummoned
    VIN
    url
    owner {
      firstName
      lastName
    }
  }
  users {
    id
    firstName
    lastName
    money
    cars{
      id
      aILevel
      incomePerHr
      isSummoned
      isWorking
    }
  }
}`
```

#### Useful Async UpdateCar Resolver
```
module.exports = async (_, {id, input}, {models}) => {
    try{

        
        const newAndUpdated = await models.Car.findByIdAndUpdate(
            {_id: id},
            input,
            {new: true,
            useFindAndModify: false}
            )

        return newAndUpdated

    } catch(error){
        throw new ApolloError(error)
    }
}
```

#### Detail of Batch Update for Hyre All Cars
```
...
if(type ==="hyre"){
              owner.cars.forEach(carObj => {
                
                id = carObj.id
                input = {isSummoned: false, isWorking: true}

                updateCarMutation({variables: { id, input }})

              })
...
```

#### Resolver Outline
```
module.exports = {
    Mutation: {
        ...userMutations,
        ...carMutations
    },
    Query: {
        ...basicUserQueries,
        ...basicCarQueries
    },
    Car: {
        ...carQueries
    },
    User: {
        ...userQueries

    }

}
```







