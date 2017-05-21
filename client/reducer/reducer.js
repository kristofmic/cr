import { combineReducers } from 'redux';

import carRentalsReducer from './reducers/car_rentals_reducer';

const reducer = combineReducers({
  carRentals: carRentalsReducer,
});

export default reducer;
