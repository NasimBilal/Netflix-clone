import React, {useState, useContext} from 'react';
import './Welcome.css';
import {Button, withStyles, makeStyles} from '@material-ui/core';
import {red, blue} from '@material-ui/core/colors';
import {useHistory} from 'react-router-dom';
import { EmailContext } from '../../Context/emailContext';
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
    },
    blue: {
      margin: theme.spacing(1),
      color: theme.palette.getContrastText(blue[700]),
      backgroundColor: blue[700],
      '&:hover': {
        backgroundColor: blue[900],
      },
    }
}));

function Welcome() {
  const {handleEmail, email} = useContext(EmailContext);
  const history = useHistory();
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState('en');
  
  const showLanguage=(e)=>{
    e.preventDefault();
    setShow(true);
  }
  const changeLanguage=()=>{
    setLanguage('ma');
  }
  const english=()=>{
    setLanguage('en')
  }

  return (
        <div className="welcome">
            <img src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9.jpg" className="welcome-bg" />
            <div className="fade-bottom"></div>
            <img src={logo} alt="" className="welcome-logo" />
            <div className="welcome-signin-button">
                <ColorButton variant="contained" color="primary" onClick={()=>history.push('./signin')} className={classes.margin}>
                    SignIn
                </ColorButton>
            </div>
            <div className="welcome-language">
              <ColorButton variant="contained" color="primary" onClick={showLanguage} className={classes.margin}>
                Select Language
              </ColorButton>
              {
                show ? (
                  <div className="language-menu">
                <ColorButton variant="contained" color="primary" value={'en'} onClick={english} className={classes.blue}>
                  English
                </ColorButton>
                <ColorButton variant="contained" color="primary" onClick={changeLanguage} className={classes.blue}>
                  മലയാളം
                </ColorButton>
              </div>
                ) 
                : (null)
              }
              
            </div>
              <div className="welcome-card">
                <h4 className="welcome-title">{language === 'en' ? "Unlimited movies, TV shows and more." : <p className="ma-title">"പരിധിയില്ലാത്ത സിനിമകൾ, ടിവി ഷോകൾ എന്നിവയും അതിലേറെയും." </p> } </h4>
                <br />
                <h5 className="welcome-subtitle">{ language === 'en' ? "Watch anywhere. Cancel anytime." : <p className="ma-subtitle">"എവിടെയും കാണുക. എപ്പോൾ വേണമെങ്കിലും റദ്ദാക്കുക."</p> } </h5>
                <br />
                <h6 className="welcome-caption">{ language === 'en' ? "Ready to watch? Enter your email to create or restart your membership." : <p className="ma-caption">"കാണാൻ തയ്യാറാണോ? നിങ്ങളുടെ അംഗത്വം സൃഷ്ടിക്കുന്നതിനോ പുനരാരംഭിക്കുന്നതിനോ നിങ്ങളുടെ ഇമെയിൽ നൽകുക."</p> } </h6>
                <br />
                <input className="welcome-label" type="text" value={email} onChange={(e)=>handleEmail(e)} placeholder="Email Address" />
                <ColorButton disabled={!email} onClick={()=>history.push('./signup')} variant="contained" color="primary" className={classes.margin}>
                    Get Started >
                </ColorButton>
            </div>
            <hr />
        </div>
    )
}

export default Welcome;
