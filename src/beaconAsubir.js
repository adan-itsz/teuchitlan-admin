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


class BeaconASubir extends Component {

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (

      <div>

        <TextField
           hintText="ID beacon"
           underlineStyle={styles.underlineStyle}
         /><br />
         <br/>
         <TextField
            hintText="Zona"
            underlineStyle={styles.underlineStyle}
          /><br /><br/>
          <TextField
             hintText="Ubicacián geográfica"
             underlineStyle={styles.underlineStyle}
           /><br /><br/>
           <TextField
              hintText="Referencia"
              underlineStyle={styles.underlineStyle}
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
