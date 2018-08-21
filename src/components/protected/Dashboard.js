import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Formulario from '../Formulario/Formulario.jsx';
import { base } from '../../config/constants.js';
import firebase from 'firebase/app';
import 'firebase/database';



class Dashboard extends Component {
  classes = {};
  constructor(props){
    super(props)
    //this.classes = props.classes;
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = base;
    this.database = this.app.database().ref().child('Post');

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
   
    <Formulario addNote={this.addNote}/>
    );
  }

}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Dashboard;
