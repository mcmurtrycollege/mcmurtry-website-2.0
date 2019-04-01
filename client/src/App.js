import React, { Component } from 'react';
import MButton from './displays/components/MButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, World! **
        <MButton />
        {/* Please define all actual displays in the displays folder */}     
      </div>
    );
  }
}

export default App;
