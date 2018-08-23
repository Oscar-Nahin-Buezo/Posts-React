import React, { Component } from 'react';
import './Formulario.css';
import PropTypes from 'prop-types';
//import { base } from '../../config/constants.js';
import firebase from 'firebase/app';
import 'firebase/database';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//puro material
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import MoreVertIcon from '@material-ui/icons/MoreVert';

//STYLE
const styles = theme => ({
    card: {
      maxWidth: 400,
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

class Formulario extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            newNoteContent: '',
            votos: 0,
            user: firebase.auth().currentUser,
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
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
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
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar hfer={this.state.user.photoURL}aria-label="Recipe" className={classes.avatar}>
                  
                </Avatar>
              }
              action={
                <IconButton>
                    <i className="material-icons" onClick={this.writeNote}>
                        send
                    </i>
                </IconButton>
              }
              title={<Input id="titulo" placeholder="Titulo" value={this.state.title}
              onChange={this.handleUserInput}></Input>}
              subheader={this.state.user.displayName}
            />
         
            <CardContent>
              <Typography component="p">
              <Input id="contenido" placeholder="Contenido"  type="textarea"
                   value={this.state.newNoteContent} onChange={this.handleUserInput}></Input>
              </Typography>
            </CardContent>
          </Card>
          /* <div id="Contenedor">
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
           </div>*/

        );
    }
}

Formulario.propTypes = {
    noteContent: PropTypes.string,
    //classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Formulario);