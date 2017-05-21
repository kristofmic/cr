import { connect } from 'react-redux';

import _pick from 'lodash/pick';

import { carRentalsActionCreator } from '../actions/car_rentals';

function mapStateToProps({ carRentals }) {
  return _pick(carRentals, [
    'isSearching',
    'hasSearchError',
    'searchErrorMessage',
    'searchResults'
  ]);
}

// NOTE: each method on the object will be wrapped in a dispatch call for the store injected
// in the Provider component at the entry of the app. If this is instead a function, the function
// will receive dispatch as an argument and can be used accordingly.
const mapDispatchToProps = _pick(carRentalsActionCreator, [
  'searchCarRentals'
]);

const exampleContainer = connect(mapStateToProps, mapDispatchToProps);

export default exampleContainer;
