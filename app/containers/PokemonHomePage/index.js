/**
 *
 * PokemonHomePage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  getPokemonListStart,
  updateFlagInfinityStart,
} from 'containers/PokemonHomePage/actions';
import PokemonList from 'components/PokemonList';
import makeSelectPokemonHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export function PokemonHomePage({ dispatch, pokemonHomePage }) {
  useInjectReducer({ key: 'pokemonHomePage', reducer });
  useInjectSaga({ key: 'pokemonHomePage', saga });

  const { pokemonList } = pokemonHomePage;

  /**
   * dispatch actions
   */
  const getPokemonList = params => dispatch(getPokemonListStart(params));
  const updateFlagInfinity = flag => dispatch(updateFlagInfinityStart(flag));

  useEffect(() => {
    getPokemonList({ offset: 0, limit: 20 });
  }, []);

  return (
    <div>
      <Helmet>
        <title>PokemonHomePage</title>
        <meta name="description" content="Description of PokemonHomePage" />
      </Helmet>
      <PokemonList
        pokemonList={pokemonList}
        getPokemonList={getPokemonList}
        updateFlagInfinity={updateFlagInfinity}
      />
    </div>
  );
}

PokemonHomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pokemonHomePage: PropTypes.object.isRequired,
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
