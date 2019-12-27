import styled from 'styled-components';
import { Button } from 'antd';

const PokemonListDiv = styled.div`
  padding: 30px;
`;

const PokemonTypeButton = styled(Button)`
  text-transform: uppercase;
  margin-right: 5px;
  min-width: 100px;
  padding: 5px 10px;
  color: white !important;

  &.btn-type-normal {
    background: #a8a878;
  }

  &.btn-type-fire {
    background: #f08030;
  }

  &.btn-type-fighting {
    background: #c03028;
  }

  &.btn-type-water {
    background: #6890f0;
  }

  &.btn-type-flying {
    background: #a890f0;
  }

  &.btn-type-grass {
    background: #78c850;
  }

  &.btn-type-poison {
    background: #a040a0;
  }

  &.btn-type-electric {
    background: #f8d030;
  }

  &.btn-type-ground {
    background: #e0c068;
  }

  &.btn-type-psychic {
    background: #f85888;
  }

  &.btn-type-rock {
    background: #b8a038;
  }

  &.btn-type-ice {
    background: #98d8d8;
  }

  &.btn-type-bug {
    background: #a8b820;
  }

  &.btn-type-dragon {
    background: #7038f8;
  }

  &.btn-type-ghost {
    background: #705898;
  }

  &.btn-type-dark {
    background: #705848;
  }

  &.btn-type-steel {
    background: #b8b8d0;
  }

  &.btn-type-fairy {
    background: #ee99ac;
  }
`;

export { PokemonListDiv, PokemonTypeButton };
