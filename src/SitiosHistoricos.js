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
import * as firebase from 'firebase';
import { ref } from './const.js'


let SelectableList = makeSelectable(List);

const style = {
  marginRight: 20,
};
const customContentStyle = {
  width: '75%',
  maxWidth: 'none',
};


class SitiosHistoricos extends Component {
  constructor(){
    super();
    this.tomarDatos=this.tomarDatos.bind(this);
  }
  state = {
   open: false,
   datos:[],
   fotos:[],
   imagenurl:[]
 };

 subirSitio=()=>{
   var imagenes=[];
   var self= this;
   var promesa=new Promise(
     function(resolve,reject){

      self.state.datos.fotos.map((item)=>(
        resolve(imagenes=imagenes.concat(item))
      ))
    }
  )
  promesa.then(
    function(){
      self.setState({
        imagenes:imagenes,
        id:self.state.datos.id,
        nombre:self.state.datos.nombre,
        idBeacon:self.state.datos.idBeacon,
        datoHistorico:self.state.datos.datoHistorico,
        datoCultural:self.state.datos.datoCultural,
        datoCurioso:self.state.datos.datoCurioso,
        datoInteres:self.state.datos.datoInteres

      })
      //llamada a metodo para subir a BD
      self.subirImagenes();
    }
  );
    this.handleClose();
 }

 subirImagenes=()=>{
   let referencia;
   let task;
   let downloadURL;
   let imgEnlaces=[];
   let contador=0;
   let self=this;
   this.state.imagenes.map(function(item){
      console.log(item.url);
     referencia = firebase.storage().ref(`teuchitlan/SitiosHistoricos/${item.url.name}`),
     task = referencia.put(item.url);
     var promesa =new Promise(
       function(resolve,reject){
         task.on('state_changed', function(snapshot){
           let per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
             self.setState({
                statusSubida : per
             })
         }, function(error) {
           console.log(error);
         }, function() {
         resolve(downloadURL = task.snapshot.downloadURL,contador++);
         });
       }
     )
     promesa.then(function(){
       imgEnlaces=imgEnlaces.concat([{url:downloadURL}]);
       downloadURL="";
       self.setState({
         imagenurl:imgEnlaces,
         subiendo:false
       })
       if(contador>=self.state.imagenes.length){
       alert('listo');
       self.subirBD();
        }
     })
   });

 }
 subirBD=()=>{
   var referencia=ref.child('Teuchitlan/SitiosHistoricos');
   var referenciaPush=referencia.push();
   var imgs="";
   var ubicacion=this.state.ubicacion;
   this.state.imagenurl.map(item=>{
     imgs=imgs+'~'+item.url
   })

   referenciaPush.set({
     id:this.state.id,
     nombre:this.state.nombre,
     idBeacon:this.state.idBeacon,
     datoHistorico:this.state.datoHistorico,
     datoCultural:this.state.datoCultural,
     datoCurioso:this.state.datoCurioso,
     datoInteres:this.state.datoInteres,
     key:referenciaPush.key,
     imagenes:imgs
   });
 }

 tomarDatos=(array)=>{
   this.setState({
     datos:array
   })
 }

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
           onClick={this.subirSitio}
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
         <AddSitioHistorico datos={this.tomarDatos}/>
         </Dialog>

      </MuiThemeProvider>
    );
  }
}


export default SitiosHistoricos;
