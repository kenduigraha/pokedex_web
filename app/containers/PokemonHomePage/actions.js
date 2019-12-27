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
  UPDATE_FLAG_INFINITY,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getPokemonListStart(params) {
  return {
    type: GET_POKEMON_LIST_START,
    params,
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

export function updateFlagInfinityStart(flag) {
  return {
    type: UPDATE_FLAG_INFINITY,
    data: flag,
  };
}
