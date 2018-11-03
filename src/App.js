import React from 'react';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import './App.css';

export default props => {
  return (
    <div className="App">
      <header>
        <h1>JOTTO</h1>
      </header>
      <GuessedWords guessedWords={[]} />
    </div>
  );
}
