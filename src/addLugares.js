import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './AppWeb.css'

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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

function Lugar(){
this.id;
this.tipo;
this.ubicacion;
this.nombre;
this.descripcion;
this.fotos=[];
}
var lugar=new Lugar();

class AddLugares extends Component {

  constructor(props){
    super(props)

  }
  state={
    imagenes:[],
    imagenesPreview:[]
  }

  handleIdLugar=(event)=>{

    lugar.id=event.target.value;
    this.props.datos(lugar);
    this.setState({
      idBeacon:event.target.value
    })

  };

  handleTipo=(event)=>{
    lugar.tipo=event.target.value;
    this.props.datos(lugar);
    this.setState({
      tipo:event.target.value
    })
  };
  handleUbicacion=(event)=>{
    lugar.ubicacion=event.target.value;
    this.props.datos(lugar);
    this.setState({
      ubicacion:event.target.value
    })
  };
  handleNombre=(event)=>{
    lugar.nombre=event.target.value;
    this.props.datos(lugar);
    this.setState({
      nombre:event.target.value
    })
  };
  handleDescripcion=(event)=>{
    lugar.descripcion=event.target.value;
    this.props.datos(lugar);
    this.setState({
      descripcion:event.target.value
    })
  };

  seleccionarFoto=(event)=>{

    if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          let file = event.target.files[0]
          reader.onload = (e) => {

              this.setState({
                imagenesPreview:this.state.imagenesPreview.concat([{url:reader.result}]),
                imagenes:this.state.imagenes.concat([{url:file}])
              });
              lugar.fotos=this.state.imagenes;
          };
          reader.readAsDataURL(file);
      }

  }

  render() {
    return (

      <div>

        <TextField
           hintText="ID "
           underlineStyle={styles.underlineStyle}
           onChange={this.handleIdLugar}
         /><br/>
         <TextField
            hintText="Tipo"
            underlineStyle={styles.underlineStyle}
            onChange={this.handleTipo}
          />
          <br /><br/>
          <TextField
             hintText="Ubicación geográfica"
             underlineStyle={styles.underlineStyle}
             onChange={this.handleUbicacion}

           /><br /><br/>
           <TextField
              hintText="Nombre"
              underlineStyle={styles.underlineStyle}
              onChange={this.handleNombre}
            /><br /><br/>
            <TextField
               hintText="Descripción"
               underlineStyle={styles.underlineStyle}
               onChange={this.handleDescripcion}
             /><br /><br/>

             <input type='file' onChange={this.seleccionarFoto.bind(this)}/>
          <div style={styles.root}>
             <GridList style={styles.gridList} cols={2.2}>
               {this.state.imagenesPreview.map((tile) => (
                 <GridTile
                   key={tile}
                   actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                   titleStyle={styles.titleStyle}
                   titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                 >
                   <img src={tile.url} />
                 </GridTile>
               ))}
             </GridList>
        </div>


        </div>

    )}
}
export default AddLugares;
