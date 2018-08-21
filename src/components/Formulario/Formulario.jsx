import React, { Component } from 'react';
import './Formulario.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Formulario extends Component{

    constructor(props){
        super(props);
        this.noteContent = ''; 
        this.title = '';
        this.votos =0;

    }

    render(){
        return(
           <div id="Contenedor">
               <div id="Contenedor_label"><Label>Nuevo Post</Label></div>
               <div id="Contenedor_titulo">
                   <Input id="titulo" placeholder="Titulo"></Input>
               </div>
               <div id="Contenedor_contenido">
                   <Input id="Contenido" placeholder="Contenido"  type="textarea"></Input>
               </div>
               <div id="boton"><Button>Add Post</Button></div>
           </div>
        )
    }
}

Formulario.propTypes = {
    noteContent: PropTypes.string
}

export default Formulario;