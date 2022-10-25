import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

class App extends React.Component {
  // state = {
  //   list: pokemonList,
  // }
  // handleChangeList = () => {
  //   this.setState((prevState) => ({ 
  //     list: prevState[0], 
  //   }));
  // };
  render() {
    return (
      <div className="App">
        <Pokedex pokemonList={ pokemonList[0] } />
      </div>
    );
  }
}

export default App;
