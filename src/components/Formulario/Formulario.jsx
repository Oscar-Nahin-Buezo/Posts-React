import React, { Component } from 'react';
import './Formulario.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Formulario extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            newNoteContent: '',
            votos: 0,
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);

    }
    handleUserInput(e){
        if(e.target.id==="titulo"){
            this.setState({
                title: e.target.value, // the value of the text input
            });
        }else{
            this.setState({
                newNoteContent: e.target.value, // the value of the text input
            });
        }
        
    }
    writeNote(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addNote(this.state.title, this.state.newNoteContent, this.state.votos);

        // Set newNoteContent back to an empty string.
        this.setState({
            title: '',
            newNoteContent: '',
            votos: 0,
        });
    }

    render(){
        return(
           <div id="Contenedor">
               <div id="Contenedor_label"><Label>Nuevo Post</Label></div>
               <div id="Contenedor_titulo">
                   <Input id="titulo" placeholder="Titulo" value={this.state.title}
                    onChange={this.handleUserInput}></Input>
               </div>
               <div id="Contenedor_contenido">
                   <Input id="contenido" placeholder="Contenido"  type="textarea"
                   value={this.state.newNoteContent} onChange={this.handleUserInput}></Input>
               </div>
               <div id="boton" onClick={this.writeNote}><Button>Add Post</Button></div>
           </div>
        )
    }
}

Formulario.propTypes = {
    noteContent: PropTypes.string
}

export default Formulario;