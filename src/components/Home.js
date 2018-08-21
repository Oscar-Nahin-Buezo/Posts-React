import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
 //{ DB_CONFIG } from '../config/config.js';
import { base } from '../config/constants.js';
import firebase from 'firebase/app';
import 'firebase/database';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = base;
    this.database = this.app.database().ref().child('Post');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
    };
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        title: snap.val().Title,
        newNoteContent: snap.val().Mensaje,
        votos: snap.val().Votos,
      })

      this.setState({
        notes: previousNotes
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

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">POSTS</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.newNoteContent} 
                title= {note.title}
                votos={note.votos}
                noteId={note.id} 
                key={note.id} 
                removeNote ={this.removeNote}/>
              )
            })
          }
        </div>
       
      </div>
    );
  }
}
