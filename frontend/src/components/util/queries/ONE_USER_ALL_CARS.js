import { gql } from '@apollo/client';

export const ONE_USER_ALL_CARS = gql`
    query getOneUserWithCars($id: ID) {
        user(id: $id) {
            cars {
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
    }
}
`