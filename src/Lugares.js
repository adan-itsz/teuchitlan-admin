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
import AddLugares from './addLugares.js'
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
class Lugares extends Component {
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
           label="Cancel"
           primary={true}
           onClick={this.handleClose}
         />,
         <FlatButton
           label="Submit"
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
                  <TableHeaderColumn>Tipo</TableHeaderColumn>
                  <TableHeaderColumn>Nombre</TableHeaderColumn>
                  <TableHeaderColumn>Ubicación</TableHeaderColumn>
                  <TableHeaderColumn>Coordenadas</TableHeaderColumn>
                  <TableHeaderColumn>Descripción</TableHeaderColumn>

                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableRowColumn>001</TableRowColumn>
                  <TableRowColumn>Hotel</TableRowColumn>
                  <TableRowColumn>El viajero</TableRowColumn>
                  <TableRowColumn>calle Hidalgo #234</TableRowColumn>
                  <TableRowColumn>70.45.1.2</TableRowColumn>
                  <TableRowColumn>Es un hostal para visitantes extremos </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>

            <FloatingActionButton secondary={true} style={style} onClick={this.handleOpen} >
              <ContentAdd />
              </FloatingActionButton><br/>

              <Dialog
               title="Agregar lugar"
               actions={actions}
               modal={true}
               contentStyle={customContentStyle}
               open={this.state.open}
             >
             <AddLugares/>
             </Dialog>

            </MuiThemeProvider>
    );
  }
}

export default Lugares;
