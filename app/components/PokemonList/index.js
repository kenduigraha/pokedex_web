/**
 *
 * PokemonList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PokemonList() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PokemonList.propTypes = {};

export default memo(PokemonList);
