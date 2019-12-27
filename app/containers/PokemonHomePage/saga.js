import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_POKEMON_LIST_START } from 'containers/PokemonHomePage/constants';
import {
  getPokemonListSuccess,
  getPokemonListFailed,
} from 'containers/PokemonHomePage/actions';

import { POKEMON } from 'utils/api';

import request from 'utils/request';

export function* getPokemonList({ params: { offset, limit } }) {
  try {
    const data = yield call(
      request,
      `${POKEMON.LIST}?offset=${offset}&limit=${limit}`,
    );
    yield put(getPokemonListSuccess(data));
  } catch (err) {
    yield put(getPokemonListFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* pokemonHomePageSaga() {
  yield takeLatest(GET_POKEMON_LIST_START, getPokemonList);
}
