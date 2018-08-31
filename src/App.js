import React, { Component } from 'react';
import './semantic/src/output/semantic.min.css';
import Sample from './components/Sample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sample/>
      </div>
    );
  }
}

export default App;
