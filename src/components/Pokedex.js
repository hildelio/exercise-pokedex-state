import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon key={ pokemonList.id } pokemon={ pokemonList } />
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
