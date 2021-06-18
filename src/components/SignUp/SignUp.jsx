import React, {useContext, useState} from 'react';
import './SignUp.css';
import {Button, makeStyles, withStyles} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import { EmailContext } from '../../Context/emailContext';
import { useHistory } from 'react-router';
import {auth} from '../../firebase';
import logo from '../../Pages/netflix-log.png'

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[700]),
      backgroundColor: red[700],
      '&:hover': {
        backgroundColor: red[900],
      },
    },
  }))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        marginLeft: 1100,
        padding: 13 ,
        marginTop: 25,
    },
    signup: {
        width: 366,
        height: 50,
    }
}));

function SignUp() {
    const classes = useStyles();
    const history = useHistory();
    const {email} = useContext(EmailContext);
    const [password, setPassword] = useState("");
    
    const SignUp =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(()=>{history.push('./home')})
        .catch((error)=> alert(error.message));
    }

    return (
        <div className="signup">
            <div className="signup-navbar">
                <img src={logo} alt="" className="signup-logo" />
                <ColorButton variant="contained" onClick={()=>history.push('./signin')} color="primary" className={classes.margin}>
                    SignIn
                </ColorButton>
            </div>
            <hr className="hr"/>
            <form >
                <div className="form">
                    <br />
                    <h2 className="signup-heading">Welcome back!<br/>
                        Joining Netflix is easy.
                    </h2>
                    <br />
                    <h3 className="signup-subheading">Enter your password and you'll be watching in no time.</h3>
                    <br />
                    <h3 className="signup-email">Email</h3>
                    <input type="text" placeholder={email} className="signup-password" />
                    <br />
                    <br />
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="signup-password" placeholder="Enter your password"/>
                    <br />
                    <br />
                    <ColorButton variant="contained" type="submit" onClick={SignUp} color="primary" className={classes.signup}>
                        SignUp
                    </ColorButton>
                </div>
            </form>
            
        </div>
    )
    
}

export default SignUp;
