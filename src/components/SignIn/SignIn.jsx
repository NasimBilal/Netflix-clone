import React, {useState} from 'react'
import './SignIn.css';
import {Button, withStyles, makeStyles} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
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
        padding: 13 ,
        marginLeft: 20,
    },
}));

function SignIn() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin= (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(()=>history.push('./home'))
        .catch((error)=>alert(error.message));
    }
    return (
        <div className="signin">
            <img src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9.jpg" className="signin-bg" />
            <div className="signin-fade-bottom"></div>
            <img src={logo} alt="" className="signin-logo" />
            <form>
                <div className="signin-form">
                    <h2>SignIn</h2>
                    <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <br />
                    <ColorButton type="submit" onClick={signin} variant="contained" color="primary" className={classes.margin}>
                        SignIn
                    </ColorButton>
                    <h4>New to Netflix?</h4>
                    <ul onClick={()=>history.push('./signup')}>SignUp Now</ul>
                </div>
            </form>

        </div>
    )
}

export default SignIn
