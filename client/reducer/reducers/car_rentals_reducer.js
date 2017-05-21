import update from 'immutability-helper';

import reducerFactory from '../reducer_factory';

import {
  SEARCH_CAR_RENTALS,
  SEARCH_CAR_RENTALS_ERROR,
  SEARCH_CAR_RENTALS_RESPONSE
} from '../../constants';

const INITIAL_STATE = {
  isSearching: false,
  hasSearchError: false,
  searchErrorMessage: '',
  searchResults: []
};

const carRentalsReducer = {
  [SEARCH_CAR_RENTALS]: searchCarRentals,
  [SEARCH_CAR_RENTALS_RESPONSE]: searchCarRentalsResponse,
  [SEARCH_CAR_RENTALS_ERROR]: searchCarRentalsError,
};

function searchCarRentals(state) {
  return update(state, { $merge: {
    isSearching: true,
    hasSearchError: false,
    searchErrorMessage: ''
  } });
}

function searchCarRentalsResponse(state, payload = {}) {
  const {
    data
  } = payload;

  return update(state, { $merge: {
    isSearching: false,
    searchResults: data
  } });
}

function searchCarRentalsError(state, payload) {
  const {
    message: searchErrorMessage
  } = payload;

  return update(state, { $merge: {
    isSearching: false,
    hasSearchError: true,
    searchErrorMessage
  } });
}

export default reducerFactory(carRentalsReducer, INITIAL_STATE, 'carRentalsReducer');
