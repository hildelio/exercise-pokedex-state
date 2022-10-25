import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

class App extends Component {
  state = {
    index: 0,
  };

  handleNextPokemon = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  render() {
    const { index } = this.state;
    return (
      <div className="App">
        <Pokedex pokemonList={ pokemonList[index] } />
        <button
          type="button"
          onClick={ () => this.handleNextPokemon(pokemonList.length) }
        >
          Próximo pokémon
        </button>
      </div>
    );
  }
}

export default App;
