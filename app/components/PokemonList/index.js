/**
 *
 * PokemonList
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import CharactersCard from 'components/CharactersCard';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class PokemonList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      limit: 20,
      offset: 0,
      cardLoading: false,
    };
  }

  /**
   * hit API pokemon list
   */
  fetchDataPokemonList = params => {
    this.props.getPokemonList(params);
  };

  componentWillReceiveProps(nextProps) {
    document.addEventListener('scroll', this.trackScrolling);

    if (nextProps.pokemonList.infinity === false) {
      this.setState({ cardLoading: false });
    }
  }

  /**
   * remove event listener scroll
   */
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  /**
   * check reached bottom or not
   * @param {element} el
   */
  isBottom(el) {
    if (el) return el.getBoundingClientRect().bottom <= window.innerHeight;
    return false;
  }

  /**
   * track scroll & hit API after reached
   */
  trackScrolling = () => {
    const wrappedElement = document.getElementById('content');

    if (
      this.props.pokemonList.isLoading === false &&
      this.isBottom(wrappedElement)
    ) {
      this.props.updateFlagInfinity(true);

      document.removeEventListener('scroll', this.trackScrolling);

      if (this.props.pokemonList.infinity === true) {
        this.setState(
          prevState => ({
            offset: prevState.offset + 20,
          }),
          () => {
            this.fetchDataPokemonList({
              limit: this.state.limit,
              offset: this.state.offset,
            });
          },
        );
      }
    }
  };

  render() {
    const { pokemonList } = this.props;
    return (
      <div id="content" style={{ background: '#ECECEC', padding: '30px' }}>
        {pokemonList.infinity === false && pokemonList.isLoading === true ? (
          'loading'
        ) : (
          <div>
            <Row gutter={24}>
              {pokemonList.data.map(char => (
                <CharactersCard
                  key={`${char.name}`}
                  loading={this.state.cardLoading}
                  data={char}
                />
              ))}
            </Row>
            {pokemonList.infinity === true && 'loading'}
          </div>
        )}
      </div>
    );
  }
}

PokemonList.propTypes = {
  pokemonList: PropTypes.object.isRequired,
  getPokemonList: PropTypes.func.isRequired,
  updateFlagInfinity: PropTypes.func.isRequired,
};

export default PokemonList;
