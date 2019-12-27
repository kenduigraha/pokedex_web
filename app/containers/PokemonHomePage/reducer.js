/*
 *
 * PokemonHomePage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_POKEMON_LIST_START,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILED,
} from './constants';

export const initialState = {
  pokemonList: {
    data: [],
    error: {},
    isLoading: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const pokemonHomePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_POKEMON_LIST_START:
        draft.pokemonList.isLoading = true;
        break;
      case GET_POKEMON_LIST_SUCCESS:
        draft.pokemonList.isLoading = false;
        draft.pokemonList.data = action.data.results ? action.data.results : [];
        break;
      case GET_POKEMON_LIST_FAILED:
        draft.pokemonList.isLoading = false;
        draft.pokemonList.data = [];
        draft.pokemonList.error = action.error;
        break;
    }
  });

export default pokemonHomePageReducer;
