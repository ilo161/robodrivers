import { gql } from '@apollo/client';

const ALL_USER_CARS = gql`
    query oneUserCars($id: ID){
        user(id: $id) {
            cars{
                id
                isSummoned
                isWorking
            }
        }
    }`