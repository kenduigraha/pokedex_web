/**
 *
 * PokemonList
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Modal, Button, Col, Progress, Typography } from 'antd';
import CharactersCard from 'components/CharactersCard';

import { PokemonListDiv, PokemonTypeButton } from './styles';

const { Text } = Typography;

class PokemonList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      limit: 20,
      offset: 0,
      cardLoading: false,
      visible: false,
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

  showModal = name => {
    this.props.getPokemonDetail(name);
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  renderType(types) {
    return types.map(data => {
      const type = data.type.name;

      return (
        <PokemonTypeButton
          className={`btn-type-${type}`}
          // type="primary"
          key={type}
          variant={type}
        >
          {type}
        </PokemonTypeButton>
      );
    });
  }

  renderStats(stats) {
    return stats.reverse().map(data => (
      <Row key={data.stat.name}>
        <Col span={12}>{data.stat.name}</Col>
        <Col span={12}>
          <Progress percent={data.base_stat} />
        </Col>
      </Row>
    ));
  }

  render() {
    const { pokemonList, pokemonDetail } = this.props;
    return (
      <PokemonListDiv id="content">
        {Object.keys(pokemonList.error).length > 0 && 'Pokémon Not Found'}
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
                  showModal={this.showModal}
                />
              ))}
            </Row>
            {pokemonList.infinity === true && 'loading'}
          </div>
        )}
        <Modal
          visible={this.state.visible}
          title={pokemonDetail.data.species && pokemonDetail.data.species.name}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          footer={[
            <Button key="back" onClick={this.handleOk}>
              Back
            </Button>,
          ]}
        >
          <Row span={24} gutter={15}>
            <Col span={12}>
              <CharactersCard
                span={24}
                loading={this.state.cardLoading}
                data={pokemonDetail.data.species && pokemonDetail.data.species}
                showModal={() => {}}
              />
            </Col>
            <Col span={12}>
              {pokemonDetail.data.types &&
                this.renderType(pokemonDetail.data.types)}

              {pokemonDetail.data.stats &&
                this.renderStats(pokemonDetail.data.stats)}
            </Col>
          </Row>
          <Row span={24}>
            <Col col={24}>
              <Text strong>Profile</Text>
              <div>
                <span>Height :</span>
                &nbsp;&nbsp;
                {pokemonDetail.data.height && pokemonDetail.data.height} m
              </div>
              <div>
                <span>Weight :</span>
                &nbsp;&nbsp;
                {pokemonDetail.data.weight && pokemonDetail.data.weight} kg
              </div>
              <div>
                <span>Base Experience :</span>
                &nbsp;&nbsp;
                {pokemonDetail.data.base_experience &&
                  pokemonDetail.data.base_experience}
              </div>
            </Col>
          </Row>
        </Modal>
      </PokemonListDiv>
    );
  }
}

PokemonList.propTypes = {
  pokemonList: PropTypes.object.isRequired,
  getPokemonList: PropTypes.func.isRequired,
  getPokemonDetail: PropTypes.func.isRequired,
  updateFlagInfinity: PropTypes.func.isRequired,
  pokemonDetail: PropTypes.object.isRequired,
};

export default PokemonList;
