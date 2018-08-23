import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { base } from '../config/constants.js';
import firebase from 'firebase/app';
import 'firebase/database';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.addLike=this.addLike.bind(this);

    this.app = base;
    this.database = this.app.database().ref().child('Post');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
      comenta: {name:"", Contenido:""},
    };
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
      
      this.setState({comenta: {name:snap.val().Comentario.Usuario, 
        Contenido :snap.val().Comentario.Contenido}});
      console.log(this.state.comenta);
      previousNotes.push({
        id: snap.key,
        title: snap.val().Title,
        newNoteContent: snap.val().Mensaje,
        votos: snap.val().Votos,
        comentario: this.state.comenta,
      })

      this.setState({
        notes: previousNotes,
       
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(titulo,note,votos){
    this.database.push().set({ Title:titulo,Mensaje: note,Votos: votos});
  }

  addLike(noteId, Votos){
    this.database.child(noteId).update({Votos:Votos});
    window.location.reload()
  }
  

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    
    return (
  
      <div id =" contener"className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">POSTS</div>
        </div>
        <div id="cuerpo" className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                
                <Note noteContent={note.newNoteContent} 
                title= {note.title}
                votos={note.votos}
                comentario={note.comentario.Contenido}
                nombreComentario={note.comentario.name}
                noteId={note.id} 
                key={note.id} 
                removeNote ={this.removeNote}
                addLike={this.addLike}/>
              )
            })
          }
        </div>
       
      </div>
    );
  }
}
