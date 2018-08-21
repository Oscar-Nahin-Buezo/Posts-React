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
        this.handleAddLike = this.handleAddLike.bind(this);
    }
   
    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    handleAddLike(id){
        var Votos = this.votos +1;
        
        this.props.addLike(id, Votos);
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
                    <div id="boton"><button onClick={() => this.handleAddLike(this.noteId)}>Like
                    </button></div>
                </div>
               
                
            </div>
        )
    }
}

Note.propTypes = {
    title: PropTypes.string,
    noteContent: PropTypes.string,
    votos: PropTypes.number
}

export default Note;
