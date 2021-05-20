

export const UPDATE_CARS_MANY = gql`
    mutation updateCarMany($id: [ID], $input: [UpdateCarInput]!) {
      updateCarMany(id: $id, input: $input) {
        id
        make
        model
        mileage
        year
        aILevel
        incomePerHr
        isWorking
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