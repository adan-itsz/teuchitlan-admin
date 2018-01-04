import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import BeaconsActivos from './Beacons.js';
import Lugares from './Lugares.js';
import './AppWeb.css';
import SitiosHistoricos from './SitiosHistoricos.js';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';




class ApplicacionWeb extends Component {

  render() {
    return (

      <Router>
        <div className="contenedor">
          <div id="barraLateral">

                  <ul id='lista'>
                    <li><Link to="/AppWeb"><p className='navOptions'>Beacons Activos</p></Link></li>
                    <li><Link to="/AppWeb/Lugares"><p className='navOptions'>Lugares </p></Link></li>
                    <li><Link to="/AppWeb/SitiosHistoricos"><p className='navOptions'>Sitios Historicos</p></Link></li>
                  </ul>

          </div>
                  <div className="contenidoComponente">
                    <Route exact path="/AppWeb" component={BeaconsActivos} />
                    <Route path="/AppWeb/Lugares" component={Lugares} />
                    <Route path="/AppWeb/SitiosHistoricos" component={SitiosHistoricos} />
                  </div>
      </div>
    </Router>


    );
  }
}

export default ApplicacionWeb;
