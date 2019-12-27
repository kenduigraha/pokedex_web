/**
 *
 * PokemonFilter
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input, Select, Row, Col } from 'antd';

const { Search } = Input;
const { Option } = Select;

const PokemonSelect = styled(Select)`
  width: 100%;
`;

const PokemonFilterRow = styled(Row)`
  padding-left: 30px;
  padding-right: 30px;
`;

function PokemonFilter({ getPokemonList, pokemonTypes, getPokemonListByType }) {
  const [dataInput, setDataInput] = useState('');

  const handleChange = value => {
    getPokemonListByType(value);
  };

  return (
    <div>
      <PokemonFilterRow span={24} gutter={20}>
        <Col span={10}>
          <PokemonSelect
            size="large"
            placeholder="Select Pokémon's Type"
            onChange={handleChange}
          >
            {pokemonTypes.map(type => (
              <Option key={type.name} value={type.name}>
                {type.name}
              </Option>
            ))}
          </PokemonSelect>
        </Col>
        <Col span={14}>
          <Search
            size="large"
            value={dataInput}
            placeholder="Search for Pokémon"
            onSearch={value => getPokemonList({ name: value })}
            onChange={e => setDataInput(e.target.value.trim())}
          />
        </Col>
      </PokemonFilterRow>
    </div>
  );
}

PokemonFilter.propTypes = {
  getPokemonList: PropTypes.func.isRequired,
  getPokemonListByType: PropTypes.func.isRequired,
  pokemonTypes: PropTypes.array.isRequired,
};

export default memo(PokemonFilter);
