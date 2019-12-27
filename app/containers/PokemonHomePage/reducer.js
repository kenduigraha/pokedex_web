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
  GET_POKEMON_DETAIL_START,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILED,
  GET_POKEMON_TYPES_START,
  GET_POKEMON_TYPES_SUCCESS,
  GET_POKEMON_TYPES_FAILED,
  GET_POKEMON_LIST_BY_TYPES_START,
  GET_POKEMON_LIST_BY_TYPES_SUCCESS,
  GET_POKEMON_LIST_BY_TYPES_FAILED,
} from './constants';

export const initialState = {
  pokemonList: {
    data: [],
    error: {},
    isLoading: false,
    infinity: false,
  },
  pokemonDetail: {
    data: {},
    error: {},
    isLoading: false,
  },
  pokemonTypes: {
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
      case GET_POKEMON_LIST_BY_TYPES_START:
      case GET_POKEMON_LIST_START:
        draft.pokemonList.isLoading = true;
        break;
      case GET_POKEMON_LIST_SUCCESS:
        draft.pokemonList.isLoading = false;
        if (!action.data.results) {
          draft.pokemonList.data = [action.data.species];
        } else {
          const results =
            state.pokemonList.data.length === 1
              ? action.data.results
              : state.pokemonList.data.concat(action.data.results);

          draft.pokemonList.data = action.data.results ? results : [];
        }
        break;

      case GET_POKEMON_LIST_BY_TYPES_SUCCESS:
        draft.pokemonList.isLoading = false;
        draft.pokemonList.data = action.data.pokemon.map(detail => ({
          ...detail.pokemon,
        }));
        break;
      case GET_POKEMON_LIST_BY_TYPES_FAILED:
      case GET_POKEMON_LIST_FAILED:
        draft.pokemonList.isLoading = false;
        draft.pokemonList.infinity = false;
        draft.pokemonList.data = [];
        draft.pokemonList.error = action.error;
        break;
      case UPDATE_FLAG_INFINITY:
        draft.pokemonList.infinity = action.data;
        break;

      // GET DETAIL POKEMON
      case GET_POKEMON_DETAIL_START:
        draft.pokemonDetail.isLoading = true;
        break;
      case GET_POKEMON_DETAIL_SUCCESS:
        draft.pokemonDetail.isLoading = false;
        draft.pokemonDetail.data = action.data;
        break;
      case GET_POKEMON_DETAIL_FAILED:
        draft.pokemonDetail.isLoading = false;
        draft.pokemonDetail.data = [];
        draft.pokemonDetail.error = action.error;
        break;

      // GET LIST POKEMON TYPES
      case GET_POKEMON_TYPES_START:
        draft.pokemonTypes.isLoading = true;
        break;
      case GET_POKEMON_TYPES_SUCCESS:
        draft.pokemonTypes.isLoading = false;
        draft.pokemonTypes.data = action.data.results;
        break;
      case GET_POKEMON_TYPES_FAILED:
        draft.pokemonTypes.isLoading = false;
        draft.pokemonTypes.data = [];
        draft.pokemonTypes.error = action.error;
        break;
    }
  });

export default pokemonHomePageReducer;
