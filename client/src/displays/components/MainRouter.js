import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Intro from './spashpage/intropage';
import About from './navbar headers/about/about';
import Events from './navbar headers/events/events/events';
import ArtEvents from './navbar headers/events/artevents/artevents';
import McTeam from './navbar headers/residential leadership/mcteam/mcteam';
import McMinistry from './navbar headers/residential leadership/mcministry/mcministry';
import Court from './navbar headers/residential leadership/court/court';
import Committees from './navbar headers/residential leadership/committees/committees';
import DivisionalAdvisors from './navbar headers/academics/divisionaladvisors/divisionaladvisors';
import PAAs from './navbar headers/academics/paas/paas';
import AcademicFellows from './navbar headers/academics/fellows/fellows';
import ResidentHealthAdvisors from './navbar headers/wellbeing/resident_health_advisors';
import StriveLiaisons from './navbar headers/wellbeing/strive_liaisons';
import RoomReservations from './navbar headers/resources/roomreservations/roomreservations';
import McmResources from './navbar headers/resources/mcmurtryresources/mcmresources';
import WorkOrder from './navbar headers/resources/workorder/workorder';
import InitiativeRequest from './navbar headers/resources/initiativerequest/initiativerequest';
import EquipmentRequest from './navbar headers/resources/equipmentrequest/equipmentrequest';
import Mis from './navbar headers/resources/mis/mis';
import Contact from './navbar headers/contact/contact';
import Constitution from './navbar headers/guiding documents/constitution/constitution';
import GeneralBylaws from './navbar headers/guiding documents/general-bylaws/general-bylaws';
import HousingBylaws from './navbar headers/guiding documents/housing-bylaws/housing-bylaws';
import ParkingBylaws from './navbar headers/guiding documents/parking-bylaws/parking-bylaws';
import TaxExempt from './navbar headers/resources/tax-exempt-form/tax-exempt-form';

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route exact path="/about" component={About} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/artevents" component={ArtEvents} />
              <Route exact path="/mcteam" component={McTeam} />
              <Route exact path="/mcministry" component={McMinistry} />
              <Route exact path="/court" component={Court} />
              <Route exact path="/committees" component={Committees} />
              <Route exact path="/divisionaladvisors" component={DivisionalAdvisors} />
              <Route exact path="/peeracademicadvisors" component={PAAs} />
              <Route exact path="/academicfellows" component={AcademicFellows} />
              <Route exact path='/RHAs' component={ResidentHealthAdvisors} />
              <Route exact path="/striveliaisons" component={StriveLiaisons} />
              <Route exact path="/roomreservations" component={RoomReservations} />
              <Route exact path="/mcmresources" component={McmResources} />
              <Route exact path="/workorder" component={WorkOrder} />
              <Route exact path="/initiativerequest" component={InitiativeRequest} />
              <Route exact path="/equipment" component={EquipmentRequest} />
              <Route exact path="/mis" component={Mis} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/constitution" component={Constitution} />
              <Route exact path="/generalbylaws" component={GeneralBylaws} />
              <Route exact path="/housingbylaws" component={HousingBylaws} />
              <Route exact path="/parkingbylaws" component={ParkingBylaws} />
              <Route exact path="/taxexempt" component={TaxExempt} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default MainRouter;