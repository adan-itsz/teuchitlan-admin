import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import BeaconASubir from './beaconAsubir.js'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';



const style = {
  marginRight: 20,
};
const customContentStyle = {
  width: '75%',

  maxWidth: 'none',
};


class BeaconsActivos extends Component {
  constructor(){
    super();

  }
  state = {
   open: false,
 };

 handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };

  render() {

    const actions = [
         <FlatButton
           label="Cancelar"
           primary={true}
           onClick={this.handleClose}
         />,
         <FlatButton
           label="Aceptar"
           primary={true}
           onClick={this.handleClose}
         />,
       ];
    return (


      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Zona</TableHeaderColumn>
            <TableHeaderColumn>Ubicación geográfica</TableHeaderColumn>
            <TableHeaderColumn>Referencia</TableHeaderColumn>
            <TableHeaderColumn>Tipo de beacon</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>001</TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>0.1545.298</TableRowColumn>
            <TableRowColumn>cerca del monumento</TableRowColumn>
            <TableRowColumn>70 mts</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

      <FloatingActionButton secondary={true} style={style} onClick={this.handleOpen} >
        <ContentAdd />
        </FloatingActionButton><br/>

        <Dialog
         title="Agregar beacon"
         actions={actions}
         modal={true}
         contentStyle={customContentStyle}
         open={this.state.open}
       >
       <BeaconASubir/>
       </Dialog>

      </MuiThemeProvider>
    );
  }
}




export default BeaconsActivos;
