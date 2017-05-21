import actionFactory from '../action_factory';

import {
  SEARCH_CAR_RENTALS,
  SEARCH_CAR_RENTALS_ERROR,
  SEARCH_CAR_RENTALS_RESPONSE,
} from '../../constants';

export const searchCarRentals = actionFactory(SEARCH_CAR_RENTALS);
export const searchCarRentalsError = actionFactory(SEARCH_CAR_RENTALS_ERROR);
export const searchCarRentalsResponse = actionFactory(SEARCH_CAR_RENTALS_RESPONSE);
