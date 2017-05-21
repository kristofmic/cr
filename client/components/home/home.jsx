import React from 'react';
import PropTypes from 'prop-types';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import { searchCarRentalsContainer } from '../../containers';

import { compose } from '../../utils/compose';

if (process.env.BROWSER) {
  require('./home.scss');
}

@compose([searchCarRentalsContainer])
class Home extends React.PureComponent {
  render() {
    const {
      searchCarRentals
    } = this.props;

    return (
      <div id="home">
        <h1>Best way to rent a car</h1>
        <TextField
          autoFocus
          id="search"
          placeholder="e.g. Miami Beach"
        />
        <IconButton onTouchTap={searchCarRentals}>
          <FontIcon className="material-icons">search</FontIcon>
        </IconButton>
      </div>
    );
  }
}

Home.WrappedComponent.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  hasSearchError: PropTypes.bool.isRequired,
  searchCarRentals: PropTypes.func.isRequired,
  searchErrorMessage: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired
};

export default Home;
