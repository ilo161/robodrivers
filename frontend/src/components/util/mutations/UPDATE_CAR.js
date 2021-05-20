import { gql } from '@apollo/client';

// With Single UpdateCarInput Type (versus [UpdateCarInput])
export const UPDATE_CAR = gql`
    mutation UpdateCar($id: ID, $input: UpdateCarInput!) {
      updateCar(id: $id, input: $input) {
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
        owner{
          id
          firstName
          lastName
          money
        }
      }
}`
