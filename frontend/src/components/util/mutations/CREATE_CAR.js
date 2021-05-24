import { gql } from '@apollo/client';

export const CREATE_CAR = gql`
    mutation CreateCar($input: CreateCarInput!) {
        createCar(input: $input){
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