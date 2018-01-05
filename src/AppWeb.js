import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import BeaconsActivos from './Beacons.js';
import Lugares from './Lugares.js';
import './AppWeb.css';
import SitiosHistoricos from './SitiosHistoricos.js';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Icon from 'react-icons-kit';
import { map_ok } from 'react-icons-kit/ikons/map_ok';
import { location } from 'react-icons-kit/icomoon/location';
import { feed} from 'react-icons-kit/icomoon/feed';




class ApplicacionWeb extends Component {
constructor(){
  super()
  this.state={
    uno:'beacons',  //activo por defecto
    dos:'lugaresInactivo',
    tres:'historicosInactivo'
  }
}
  cambioBeacons =()=>{
    this.setState({
      uno:'beacons',
      dos:'lugaresInactivo',
      tres:'historicosInactivo'
    })

 };
 cambioLugares =()=>{
   this.setState({
     uno:'beaconsInactivo',
     dos:'lugares',
     tres:'historicosInactivo'
   })

};
cambioHistoricos =()=>{
  this.setState({
    uno:'beaconsInactivo',
    dos:'lugaresInactivo',
    tres:'historicos'
  })

};
  render() {
    return (

      <Router>
        <div className="contenedor">
          <div id="barraLateral">

                  <ul id='lista'>
                  <div className='first'>
                    <li></li>
                  </div>
                    <div className={this.state.uno}>
                      <div className='icono'>
                        <Icon size={45} icon={feed}  style={{ color: 'white' }}/>
                      </div>
                      <li onClick={this.cambioBeacons}><Link to="/AppWeb"><p className='navOptions'>Beacons Activos</p></Link></li>
                    </div>
                    <div className={this.state.dos}>
                    <div className='icono'>
                      <Icon size={45} icon={map_ok}  style={{ color: 'white' }}/>
                    </div>
                      <li onClick={this.cambioLugares}><Link to="/AppWeb/Lugares"><p className='navOptions'>Lugares </p></Link></li>
                    </div>
                    <div className={this.state.tres}>
                    <div className='icono'>
                      <Icon size={45} icon={location}  style={{ color: 'white' }}/>
                    </div>
                    <li onClick={this.cambioHistoricos}><Link to="/AppWeb/SitiosHistoricos"><p className='navOptions'>Sitios Historicos</p></Link></li>
                    </div>
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
