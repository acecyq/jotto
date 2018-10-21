import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>JOTTO</h1>
        </header>
        <Congrats success={false} />
        <GuessedWords guessedWords={[]} />
      </div>
    );
  }
}

export default App;
