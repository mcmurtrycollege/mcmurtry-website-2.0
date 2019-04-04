import React, { Component } from 'react';
import Navbar from './displays/components/navbar/navbar';
import About from './displays/components/about/about';
import Events from './displays/components/events/events';
import ArtEvents from './displays/components/artevents/artevents';
import McTeam from './displays/components/mcteam/mcteam';
import McMinistry from './displays/components/mcministry/mcministry';
import Court from './displays/components/court/court';
import Committees from './displays/components/committees/committees';
import DivisionalAdvisors from './displays/components/divisionaladvisors/divisionaladvisors';
import './componentStyles/styles.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <About /> */}
        {/* <Events /> */}
        <ArtEvents />
        {/* <McTeam /> */}
        {/* <McMinistry /> */}
        {/* <Court /> */}
        {/* <Committees /> */}
        {/* <DivisionalAdvisors /> */}
        {/* Please define all actual displays in the displays folder */}     
      </div>
    );
  }
}

export default App;
