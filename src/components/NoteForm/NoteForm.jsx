import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
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

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
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
            <div className="formWrapper">
                <input id="titulo" className="noteInput"placeholder="Escriba el titulo..."
                value={this.state.title} onChange={this.handleUserInput} />
                <input id="contenido" className="noteInput"placeholder="Escriba el contenido..."
                value={this.state.newNoteContent} onChange={this.handleUserInput} />

                <button className="noteButton"
                onClick={this.writeNote}>Add Post</button>
            </div>
        )
    }
}

export default NoteForm;