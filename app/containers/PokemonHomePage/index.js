/**
 *
 * PokemonHomePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPokemonHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function PokemonHomePage() {
  useInjectReducer({ key: 'pokemonHomePage', reducer });
  useInjectSaga({ key: 'pokemonHomePage', saga });

  return (
    <div>
      <Helmet>
        <title>PokemonHomePage</title>
        <meta name="description" content="Description of PokemonHomePage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PokemonHomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pokemonHomePage: makeSelectPokemonHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PokemonHomePage);
