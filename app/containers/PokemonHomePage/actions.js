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
  GET_POKEMON_DETAIL_START,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILED,
  GET_POKEMON_TYPES_START,
  GET_POKEMON_TYPES_SUCCESS,
  GET_POKEMON_TYPES_FAILED,
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

export function getPokemonDetailStart(data) {
  return {
    type: GET_POKEMON_DETAIL_START,
    data,
  };
}

export function getPokemonDetailSuccess(data) {
  return {
    type: GET_POKEMON_DETAIL_SUCCESS,
    data,
  };
}

export function getPokemonDetailFailed(error) {
  return {
    type: GET_POKEMON_DETAIL_FAILED,
    error,
  };
}

export function getPokemonTypesListStart(params) {
  return {
    type: GET_POKEMON_TYPES_START,
    params,
  };
}

export function getPokemonTypesListSuccess(data) {
  return {
    type: GET_POKEMON_TYPES_SUCCESS,
    data,
  };
}

export function getPokemonTypesListFailed(error) {
  return {
    type: GET_POKEMON_TYPES_FAILED,
    error,
  };
}
