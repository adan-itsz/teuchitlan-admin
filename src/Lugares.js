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
import * as firebase from 'firebase';
import { ref } from './const.js'

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
    this.tomarDatos=this.tomarDatos.bind(this);
  }
  state = {
   open: false,
   datos:[],
   imagenes:[],
   imagenesUrl:[]
 };

 subirLugar=()=>{
   var imagenes=[];
   var self=this;
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
        tipo:self.state.datos.tipo,
        ubicacion:self.state.datos.ubicacion,
        nombre:self.state.datos.nombre,
        descripcion:self.state.datos.descripcion
      })
      //llamada a metodo para subir a BD
      self.subirImagenes();

    }
  );


   this.handleClose();
 }

 subirImagenes=()=>{
   let referencia;
   //var task;
   var downloadURL;
   let self=this;
   let imgEnlaces=[];
   let contador=0;
   self.state.imagenes.map(item=>{

     var promesa =new Promise(
       function(resolve,reject){
         const referencia = firebase.storage().ref(`teuchitlan/lugares/${item.url.name}`);
         const file=item.url;
         const task = referencia.put(file);
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
         imagenesUrl:imgEnlaces,
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
   var referencia=ref.child('Teuchitlan/lugares');
   var referenciaPush=referencia.push();
   var imgs='';
   var ubicacion=this.state.ubicacion;
   this.state.imagenesUrl.map(item=>{
     imgs=imgs+'~'+item.url
   })

   referenciaPush.set({
     id:this.state.id,
     tipo:this.state.tipo,
     ubicacion:ubicacion,
     nombre:this.state.nombre,
     descripcion:this.state.descripcion,
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
           onClick={this.subirLugar}
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
             <AddLugares datos={this.tomarDatos}/>
             </Dialog>

            </MuiThemeProvider>
    );
  }
}

export default Lugares;
