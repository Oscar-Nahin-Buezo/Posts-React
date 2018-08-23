import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import { base } from '../../config/constants.js';
import firebase from 'firebase/app';
import 'firebase/database';
//Puro Material wey
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//STYLE
const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
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
class Note extends Component{

    constructor(props){
        super(props);
        this.noteContent = props.noteContent; 
        this.title = props.title;
        this.votos = props.votos;
        this.noteId = props.noteId; 
        this.comentario = props.comentario;
        this.nombreComentario = props.nombreComentario;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        this.handleAddLike = this.handleAddLike.bind(this);
       this.state = { expanded: false, user: firebase.auth().currentUser};
    }
    
    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    handleAddLike(id){
        var Votos = this.votos +1;
        
        this.props.addLike(id, Votos);
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };

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
                  <MoreVertIcon />
                </IconButton>
              }
              title={this.title}
              subheader={this.state.user.displayName}
            />
         
            <CardContent>
              <Typography component="p">
                { this.noteContent }
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              {this.votos}
              <IconButton aria-label="Add to favorites"  onClick={() => this.handleAddLike(this.noteId)}>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
                
              </IconButton>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body2">
                  Comentarios:
                </Typography>
                <Typography paragraph>
                  {this.comentario} - {this.nombreComentario}
                </Typography>
              
               
               
              </CardContent>
            </Collapse>
          </Card>
           /*<div className="note fade-in">
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
               
                
            </div>*/
        );
    }
}

Note.propTypes = {
    title: PropTypes.string,
    noteContent: PropTypes.string,
    votos: PropTypes.number,
    classes: PropTypes.object.isRequired,
}

export default  withStyles(styles)(Note);
