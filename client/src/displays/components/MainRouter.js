import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/navbar';
import About from './navbar headers/about/about';
import Events from './navbar headers/events/events/events';
import ArtEvents from './navbar headers/events/artevents/artevents';
import McTeam from './navbar headers/residential leadership/mcteam/mcteam';
import McMinistry from './navbar headers/residential leadership/mcministry/mcministry';
import Court from './navbar headers/residential leadership/court/court';
import Committees from './navbar headers/residential leadership/committees/committees';
import DivisionalAdvisors from './navbar headers/academics/divisionaladvisors/divisionaladvisors';
import WorkOrder from './navbar headers/resources/workorder/workorder';
import InitiativeRequest from './navbar headers/resources/initiativerequest/initiativerequest';
import EquipmentRequest from './navbar headers/resources/equipmentrequest/equipmentrequest';

class MainRouter extends Component {
    render() {
      return (
        <div>
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/events" component={Events}/>
                <Route exact path="/artevents" component={ArtEvents}/>
                <Route exact path="/mcteam" component={McTeam}/>
                <Route exact path="/mcministry" component={McMinistry}/>
                <Route exact path="/court" component={Court}/>
                <Route exact path="/committees" component={Committees}/>
                <Route exact path="/da" component={DivisionalAdvisors}/>
                <Route exact path="/workorder" component={WorkOrder}/>
                <Route exact path="/initiativerequest" component={InitiativeRequest}/>
                <Route exact path="/equipment" component={EquipmentRequest}/>
              </Switch>
            </div>
          </Router>
        </div>
      );
    }
  }

  export default MainRouter;