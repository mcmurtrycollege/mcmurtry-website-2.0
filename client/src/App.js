import React, { Component } from 'react';
import MBarDefault from './displays/components/MBarDefault';

import './componentStyles/styles.css';
import './componentStyles/inputStyles.css';

class App extends Component {
  render() {
    /*
     * NOTE, this is just an example menu bar.
     * content will obviously be changed soon.
     */
    
    return (
      <div>
        <MBarDefault />
        {/* Please define all actual displays in the displays folder */}     
      </div>
    );
  }
}

export default App;
