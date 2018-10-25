import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>JOTTO</h1>
        </header>
        <Congrats success= {false} />
        <GuessedWords guessedWords={[]} />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   success: state.success
// });

// const mapDispatchToProps = dispatch => ({

// });

// export default connect(mapStateToProps)(App);
export default App;
