import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Formulario from '../Formulario/Formulario.jsx';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const styles = theme => ({
  Form:{
    widht: "900%"

  },
  Input:{
    widht: '40%'
  },
  Label:{
    widht:'83%'
  }
});

class Dashboard extends Component {
  classes = {};
  constructor(props){
    super(props)
    this.classes = props.classes;
  }
  prueba(){
    console.log('aaaa');
  }

  render() {
    return (
     /* <Form id= "FormPost" style={{width: '110%', textAlign: 'right', backgroundColor: '#0B173B',
      opacity: '0.9', borderRadius: '30px 30px 30px 30px',border: '7px solid #000000', fontFamily:'arail',
      color:'white'}}>
      <FormGroup row>
        <Label for="exampleEmail"  style={{width: '100%', textAlign: 'center'}}>Nuevo Post</Label>
        <Col >
          <Input  id="titulo" placeholder="Titulo del Post"  style={{width: '99%', textAlign: 'left',
        borderRadius: '50px 50px 50px 50px'}}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col >
          <Input type="textarea" placeholder="Contenido" name="text" id="exampleText"  style={{width: '100%', 
          textAlign: 'left', height: '150%', borderRadius: '30px 30px 30px 30px'}} />
        </Col>
      </FormGroup>   
      <FormGroup check row>
        <Col style={{width: '100%', textAlign: 'right'}}>
          <Button style={{width: '40%', textAlign: 'center', margin: '24px', padding:'18px'}}>AddPost</Button>
        </Col>
      </FormGroup>
    </Form>*/
    <Formulario/>
    );
  }

  
  /*
  <Card>
            
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              <TextField
                id = "data"
                hintText="Hint Text"
                floatingLabelText="Floating Label Text"
              />
            </CardText>
            <CardActions>
              <RaisedButton label="Action1" />
              <RaisedButton label="Action2" primary={true} onClick={() => { this.prueba(); }}/>
            </CardActions>
          </Card>
  */
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
