import React, { Component } from 'react';
import MBar from './displays/components/MBar';

import './componentStyles/styles.css';
import './componentStyles/inputStyles.css';

class App extends Component {
  render() {
    return (
      <div>
        <MBar default />
        {/* Please define all actual displays in the displays folder */}     
      </div>
    );
  }
}

export default App;
