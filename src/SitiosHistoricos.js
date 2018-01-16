import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import './AppWeb.css'
import AddSitioHistorico from './addSitioHistorico.js'

let SelectableList = makeSelectable(List);

const style = {
  marginRight: 20,
};
const customContentStyle = {
  width: '75%',
  height:'100%',
  maxWidth: 'none',
};


class SitiosHistoricos extends Component {
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
      <div className="listaLugares">
        <SelectableList defaultValue={3}>
            <Subheader>Sitios históricos</Subheader>
            <ListItem
              value={3}
              primaryText="Guachimontones"
              leftAvatar={<Avatar src="http://static.wixstatic.com/media/a5aa6c_b5923978da68f584d04b242ac43c7be2.png/v1/fill/w_758,h_506,al_c/a5aa6c_b5923978da68f584d04b242ac43c7be2.png" />}
            />
            <ListItem
              value={4}
              primaryText="Lago"
              leftAvatar={<Avatar src="http://www.demochilazo.mx/pics/Actividades/Pesca/Jalisco/Teuchitlan/281879_Teuchitlan%20012.JPG" />}
            />
            <ListItem
              value={5}
              primaryText="Plaza principal"
              leftAvatar={<Avatar src="http://static.wixstatic.com/media/813bb7_0c9e91200ce445dfbba9b8bd5925cb08.jpg/v1/fill/w_361,h_271,al_c,q_80,usm_0.66_1.00_0.01/813bb7_0c9e91200ce445dfbba9b8bd5925cb08.webp" />}
            />
          </SelectableList>
          </div>
        <FloatingActionButton secondary={true} style={style} onClick={this.handleOpen} >
          <ContentAdd />
          </FloatingActionButton><br/>

          <Dialog
           title="Agregar Sitio histórico"
           actions={actions}
           modal={true}
           contentStyle={customContentStyle}
           open={this.state.open}
         >
         <AddSitioHistorico/>
         </Dialog>

      </MuiThemeProvider>
    );
  }
}


export default SitiosHistoricos;
