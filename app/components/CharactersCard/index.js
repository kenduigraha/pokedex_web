import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { POKEMON_IMAGE_URL } from 'utils/constants';
import CharactersCardCol from './styles';
const { Meta } = Card;

const getIdPokemon = url => url.split('/')[url.split('/').length - 2];

const CharactersCard = ({ data, span, loading, showModal }) => (
  <CharactersCardCol
    span={span}
    xxl={6}
    xl={span}
    lg={8}
    md={12}
    sm={24}
    xs={24}
    onClick={() => showModal(data.name)}
  >
    <Card
      loading={loading}
      hoverable
      cover={
        <img
          alt={data.name}
          src={`${POKEMON_IMAGE_URL}/${getIdPokemon(data.url)}.png`}
        />
      }
    >
      <Meta title={data.name} />
    </Card>
  </CharactersCardCol>
);

CharactersCard.defaultProps = {
  span: 6,
};

CharactersCard.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  showModal: PropTypes.func,
  span: PropTypes.number,
};

export default memo(CharactersCard);
