/*
 *
 * PokemonHomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_POKEMON_LIST_START,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getPokemonListStart() {
  return {
    type: GET_POKEMON_LIST_START,
  };
}

export function getPokemonListSuccess(data) {
  return {
    type: GET_POKEMON_LIST_SUCCESS,
    data,
  };
}

export function getPokemonListFailed(error) {
  return {
    type: GET_POKEMON_LIST_FAILED,
    error,
  };
}
