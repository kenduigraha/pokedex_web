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
  UPDATE_FLAG_INFINITY,
} from './constants';

export const initialState = {
  pokemonList: {
    data: [],
    error: {},
    isLoading: false,
    infinity: false,
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
        draft.pokemonList.data = action.data.results
          ? state.pokemonList.data.concat(action.data.results)
          : [];
        break;
      case GET_POKEMON_LIST_FAILED:
        draft.pokemonList.isLoading = false;
        draft.pokemonList.infinity = false;
        draft.pokemonList.data = [];
        draft.pokemonList.error = action.error;
        break;
      case UPDATE_FLAG_INFINITY:
        draft.pokemonList.infinity = action.data;
        break;
    }
  });

export default pokemonHomePageReducer;
