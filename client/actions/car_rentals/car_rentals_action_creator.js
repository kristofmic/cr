import * as carRentalsSource from '../../sources/car_rentals_source';
import * as carRentalsActions from './car_rentals_actions';

export function searchCarRentals() {
  return function handleSearchCarRentals(dispatch) {
    dispatch(carRentalsActions.searchCarRentals());

    return carRentalsSource.searchCarRentals()
      .then(res => (
        dispatch(carRentalsActions.searchCarRentalsResponse(res.data))
      ))
      .catch(err => (
        dispatch(carRentalsActions.searchCarRentalsError(err))
      ));
  };
}
