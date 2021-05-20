import { gql } from '@apollo/client';

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