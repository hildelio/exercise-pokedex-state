// ./src/components/Pokedex.js
import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  state = {
    index: 0,
    filtered: '',
  };

  nextPokemon = (pokemonNumber) => {
    this.setState((state) => ({
      index: (state.index + 1) % pokemonNumber,
    }));
  };

  filterPokemon = (filtered) => {
    this.setState({ filtered, index: 0 });
  };

  fetchFilteredPokemon = () => {
    const { pokemonList } = this.props;
    const { filtered } = this.state;

    return pokemonList.filter((pokemon) => {
      if (filtered === '') return true;
      return pokemon.type === filtered;
    });
  };

  render() {
    const { index } = this.state;
    const filteredPokemon = this.fetchFilteredPokemon();
    const pokemon = filteredPokemon[index];

    return (
      <div>
        <h1>Pokedex</h1>
        <Pokemon pokemon={ pokemon } />
        <div>
          <button type="button" onClick={ () => this.filterPokemon('Fire') }>
            Fire
          </button>
          <button type="button" onClick={ () => this.filterPokemon('Psychic') }>
            Psychic
          </button>
        </div>
        <button
          type="button"
          onClick={ () => this.nextPokemon(filteredPokemon.length) }
        >
          Próximo pokémon
        </button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
