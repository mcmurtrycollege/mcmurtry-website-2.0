import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/navbar';
import McTeam from './mcteam/mcteam';
import McMinistry from './mcministry/mcministry';
import Court from './court/court';
import Committees from './committees/committees';
import DivisionalAdvisors from './divisionaladvisors/divisionaladvisors';

class MainRouter extends Component {
    render() {
      return (
        <div>
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/mcteam" component={McTeam}/>
                <Route exact path="/mcministry" component={McMinistry}/>
                <Route exact path="/court" component={Court}/>
                <Route exact path="/committees" component={Committees}/>
                <Route exact path="/da" component={DivisionalAdvisors}/>
              </Switch>
            </div>
          </Router>
          {/* <McTeam /> */}
          {/* <McMinistry /> */}
          {/* <Court /> */}
          {/* <Committees /> */}
          {/* <DivisionalAdvisors /> */}
        </div>
      );
    }
  }

  export default MainRouter;