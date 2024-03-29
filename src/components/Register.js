/* eslint-disable react/prop-types */
import React from 'react';
//import MainHeader from './MainHeader';
// import MainLogin from './MainLogin';
import Footer from './Footer';
import PropTypes from 'prop-types';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { message } from 'antd';
import {connect} from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Login from './Login';
import firebase from '../firebase';
// import MySnackbarContentWrapper from './MySnackbarContentWrapper';

const styles = theme => ({
 main: {
   width: 'auto',
   display: 'block',
   marginTop: 15,
   // border: '2px solid red',
   marginLeft: theme.spacing.unit * 3,
   marginRight: theme.spacing.unit * 3,
   [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
     width: 500,
     marginLeft: 'auto',
     marginRight: 'auto',
   },
 },
 paper: {
   marginTop: theme.spacing.unit * 2,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
 },
 avatar: {
   margin: theme.spacing.unit,
   backgroundColor: theme.palette.primary.main,
 },
 form: {
   width: '100%',
   marginTop: theme.spacing.unit,
 },
 submit: {
   marginTop: theme.spacing.unit * 3,
   backgroundColor:"#664CB6",
   color: "white"
 },
 google:{
   marginTop: theme.spacing.unit * 3,
   marginRight: theme.spacing.unit * 3,
  marginLeft: theme.spacing.unit * 3,
 },
});

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
	  error : null,
      confirmpassword: '',
	  modalOpen: this.props.isopen
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    if(this.props.is_logged_in) {
      let path = '/';
      this.props.history.push(path);
      message.success('You are already logged in');
    }
  };

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }



  onSubmit(e){
    let thisContext = this;

   e.preventDefault();
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword,
	  is_email_verify: true
    };
	
	firebase
     .auth()
     .createUserWithEmailAndPassword(this.state.email,this.state.password)
     .then((user) => {
       this.props.history.push('/');
     })
     .catch((error) => {
       this.setState({ error: error });
     });

  
    };

  render(){
    console.log("state of modal: "+ this.props.isopen);
  	console.log("New state: " + this.state.modalOpen);
	
	
	const { classes } = this.props;
    // const [value, setValue] = React.useState(2);
	
	
    return(
      <Grid container>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>

        {
          // <Avatar className={classes.avatar}>
          //   <PersonPinIcon />
          // </Avatar>
        }
          <form className={classes.form} >
          <FormControl margin="normal" required fullWidth>
           <InputLabel htmlFor="first_name">First Name</InputLabel>
           <Input type="text" id="first_name" name="first_name" value={this.state.first_name} onChange={this.onChange} autoComplete="fname" autoFocus />
         </FormControl>
         <FormControl margin="normal" required fullWidth>
           <InputLabel htmlFor="last_name">Last Name</InputLabel>
           <Input id="last_name" name="last_name" type="text" value={this.state.last_name} onChange={this.onChange} autoComplete="lname"/>
         </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" type="email" name="email" value={this.state.email} onChange={this.onChange} autoComplete="email" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" value={this.state.password} onChange={this.onChange} autoComplete="current-password" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="confirmpassword">Confirm Password</InputLabel>
              <Input name="confirmpassword" type="password" id="confirmpassword" value={this.state.confirmpassword} onChange={this.onChange} autoComplete="confirm-password" />
            </FormControl>
            <Button
  							type="submit"
  							fullWidth
  							variant="contained"
  							className={classes.submit}
							onClick={this.onSubmit}
  						>
           SIGN UP
  						</Button>
			<br />
            <br />
            {
            // <div>
            // <Button
            //   type="submit"
            //   variant="contained"
            //   color="primary"
            //   className={classes.google}
            // >
            //   google
            // </Button>
            // <Button
            //   type="submit"
            //   variant="contained"
            //   color="primary"
            //  className={classes.google}
            // >
            //   facebook
            // </Button>
            // </div>
            // <Typography >
            //   Already have an account? &nbsp;<Link to="/login">Login</Link>
            // </Typography>
          }
         </form>
       </Paper>
     </main>
     <br />
     <br />
   </Grid>
    );
  }
}

Register.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Register));
