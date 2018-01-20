import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: red500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

function Beacon(){
  this.id;
  this.zona;
  this.ubicacion;
  this.referencia;
  this.tipo;
}

var beacon=new Beacon();

class BeaconASubir extends Component {
  constructor(props){
    super(props)

  }
  state = {
    value: 1
  };

  handleIdBeacon=(event)=>{

    beacon.id=event.target.value;
    this.props.datos(beacon);
    this.setState({
      idBeacon:event.target.value
    })

  };
  handleZona=(event)=>{
    beacon.zona=event.target.value;
    this.props.datos(beacon);
    this.setState({
      zona:event.target.value
    })
  };

  handleReferencia=(event)=>{
    beacon.referencia=event.target.value;
    this.props.datos(beacon);
    this.setState({
      referencia:event.target.value
    })
  }

  handleUbicacion=(event)=>{
    beacon.ubicacion=event.target.value;
    beacon.tipo=this.state.value== '1'?'70 metros':'200 metros'; //el state retorna posicion del select, unicamente existen las dos opciones de el condicional ternario
    this.props.datos(beacon);
    this.setState({
      ubicacion:event.target.value
    })
  }

  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (

      <div>

        <TextField
           hintText="ID beacon"
           underlineStyle={styles.underlineStyle}
           onChange={this.handleIdBeacon}
         /><br />
         <br/>
         <TextField
            hintText="Zona"
            underlineStyle={styles.underlineStyle}
            onChange={this.handleZona}
          /><br /><br/>
          <TextField
             hintText="Ubicación geográfica"
             underlineStyle={styles.underlineStyle}
             onChange={this.handleUbicacion }
           /><br /><br/>
           <TextField
              hintText="Referencia"
              underlineStyle={styles.underlineStyle}
              onChange={this.handleReferencia}
            /><br /><br/>
            <SelectField
              floatingLabelText="Tipo de beacon"
              value={this.state.value}
              underlineStyle={styles.underlineStyle}
              onChange={this.handleChange}>

               <MenuItem value={1} primaryText="70 metros" />
               <MenuItem value={2} primaryText="200 metros" />

             </SelectField>

        </div>

    )}
}
export default BeaconASubir;
