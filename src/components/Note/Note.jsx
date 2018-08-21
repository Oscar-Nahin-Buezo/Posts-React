import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

    constructor(props){
        super(props);
        this.noteContent = props.noteContent; 
        this.title = props.title;
        this.votos = props.votos;
        this.noteId = props.noteId; 
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
                <div className="Contenedor" >
                    <div id= "encabezado"className="postTitulo">Asunto: {this.title}</div>
                    <div id="cuerpo"className="postContenido" > Mensaje: { this.noteContent }</div>
                
                    <div id="pie" className="postVotos">Likes: {this.votos}</div>
                    <div id="boton"><button>Like</button></div>
                </div>
               
                
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;
