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
  getPokemonTypesListStart,
  getPokemonListByTypeStart,
  // getPokemonDetailStart,
} from 'containers/PokemonHomePage/actions';
import PokemonFilter from 'components/PokemonFilter';
import PokemonList from 'components/PokemonList';
import { notification } from 'antd';
import makeSelectPokemonHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export function PokemonHomePage({ dispatch, pokemonHomePage }) {
  useInjectReducer({ key: 'pokemonHomePage', reducer });
  useInjectSaga({ key: 'pokemonHomePage', saga });

  const { pokemonList, pokemonTypes } = pokemonHomePage;
  /**
   * dispatch actions
   */
  const getPokemonList = params => dispatch(getPokemonListStart(params));
  const getPokemonListByType = type =>
    dispatch(getPokemonListByTypeStart(type));
  const getPokemonTypesList = () => dispatch(getPokemonTypesListStart());
  const updateFlagInfinity = flag => dispatch(updateFlagInfinityStart(flag));
  // const getPokemonDetail = data => dispatch(getPokemonDetailStart(data));

  useEffect(() => {
    getPokemonList({ offset: 0, limit: 20, name: '' });
    getPokemonTypesList();
  }, []);

  useEffect(() => {
    const { error } = pokemonList;

    // check object error is not empty
    if (Object.keys(error).length > 0) {
      if (error.response.status === 404) {
        // not found
        notification.info({
          message: 'Pokémon Not Found',
        });
      }
    }
  }, [pokemonList.data]);

  return (
    <div>
      <Helmet>
        <title>PokemonHomePage</title>
        <meta name="description" content="Description of PokemonHomePage" />
      </Helmet>
      <PokemonFilter
        getPokemonList={getPokemonList}
        getPokemonListByType={getPokemonListByType}
        pokemonTypes={pokemonTypes.data}
      />
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
