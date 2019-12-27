/**
 *
 * PokemonFilter
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Input } from 'antd';

const { Search } = Input;

function PokemonFilter({ getPokemonList }) {
  const [dataInput, setDataInput] = useState('');

  return (
    <div>
      <Search
        size="large"
        value={dataInput}
        placeholder="Search for Pokémon"
        onSearch={value => getPokemonList({ name: value })}
        onChange={e => setDataInput(e.target.value.trim())}
      />
    </div>
  );
}

PokemonFilter.propTypes = {
  getPokemonList: PropTypes.func.isRequired,
};

export default memo(PokemonFilter);
