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

function Sitio(){
  this.id;
  this.nombre;
  this.idBeacon;
  this.datoHistorico;
  this.datoCultural;
  this.datoCurioso;
  this.datoInteres;
  this.fotos;
}

var sitio=new Sitio();


class AddSitioHistorico extends Component {

  constructor(props){
    super(props)
  }

  state={
    imagenes:[],
    imagenesPreview:[{url:'http://v.fastcdn.co/u/abda26b9/20243556-0-react-logo.png'}]
  }

  handleIdSitio=(event)=>{

    sitio.id=event.target.value;
    this.props.datos(sitio);

  };

  handleNombre=(event)=>{

    sitio.nombre=event.target.value;
    this.props.datos(sitio);

  };
  handleIdBeacon=(event)=>{

    sitio.idBeacon=event.target.value;
    this.props.datos(sitio);

  };
  handleDatoHistorico=(event)=>{

    sitio.datoHistorico=event.target.value;
    this.props.datos(sitio);

  };

  handleDatoCultural=(event)=>{

    sitio.datoCultural=event.target.value;
    this.props.datos(sitio);

  };

  handleDatoCurioso=(event)=>{

    sitio.datoCurioso=event.target.value;
    this.props.datos(sitio);

  };
  handleDatoInteres=(event)=>{

    sitio.datoInteres=event.target.value;
    this.props.datos(sitio);

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
              sitio.fotos=this.state.imagenes
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
           onChange={this.handleIdSitio}
         />
         <div className="txt2">
         <TextField
            hintText="Nombre"
            underlineStyle={styles.underlineStyle}
            onChange={this.handleNombre}
          />
          </div>
          <br/>
          <TextField
             hintText="ID Beacon"
             underlineStyle={styles.underlineStyle}
             onChange={this.handleIdBeacon}
           /><br />
           <TextField
              hintText="información"
              floatingLabelText="Dato Historico"
              multiLine={true}
              underlineStyle={styles.underlineStyle}
              onChange={this.handleDatoHistorico}
              rows={2}
            /><br />


          <div className='inputFotos'>
              <br/>
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
        <TextField
           hintText="información"
           floatingLabelText="Dato cultural"
           multiLine={true}
           underlineStyle={styles.underlineStyle}
           rows={2}
           onChange={this.handleDatoCultural}
           className="textField1"
         />

         <TextField
            hintText="información"
            floatingLabelText="Dato curioso"
            multiLine={true}
            underlineStyle={styles.underlineStyle}
            rows={2}
            onChange={this.handleDatoCurioso}
            className="textField2"

          /><br /><br/>
          <TextField
             hintText="información"
             floatingLabelText="Dato de interés"
             multiLine={true}
             underlineStyle={styles.underlineStyle}
             rows={2}
             onChange={this.handleDatoInteres}
             className="textField3"

           />

        </div>

    )}
}
export default AddSitioHistorico;
