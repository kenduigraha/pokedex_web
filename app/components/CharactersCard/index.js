import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col } from 'antd';

import { POKEMON_IMAGE_URL } from 'utils/constants';
const { Meta } = Card;

const getIdPokemon = url => url.split('/')[url.split('/').length - 2];

const CharactersCard = ({ data, loading }) => (
  <Col
    span={6}
    xxl={6}
    xl={6}
    lg={8}
    md={12}
    sm={24}
    xs={24}
    style={{ marginBottom: '20px' }}
  >
    <Link to={`/character/${data.name}`}>
      <Card
        loading={loading}
        cover={
          <img
            alt={data.name}
            src={`${POKEMON_IMAGE_URL}/${getIdPokemon(data.url)}.png`}
          />
        }
      >
        <Meta title={data.name} />
      </Card>
    </Link>
  </Col>
);

CharactersCard.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default memo(CharactersCard);
