import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import linkedincard from './components/linkedincard.png';
import githubcard from './components/githubcard.png'
import dreamcatchercard from './components/dreamcatchercard.png'
import cvcard from './components/cvcard.png'
import border1 from './border1.png'
import border2 from './border2.png'
import avatar from './avatar.jpg'
import LinkCard from './components/LinkCard';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const useStyles = makeStyles(theme => ({
  flex1: {
    flexGrow: 1,
  },
  appbar: {
    color: '#827e22',
    backgroundColor: 'rgb(238, 238, 238)',
    opacity: '0.5'
  },
  start: {
    paddingTop: '100px',
    backgroundColor: '#eeeeee',
  },
  middle: {
    paddingTop: '70px',
    backgroundColor: 'white',
  },
  img: {
    width: '250px',
    height: '250px',
  },
  greeting: {
    textAlign: "center",
    color: "#827e22",
    padding: '20px'
  },

  checkoutcode: {
    textAlign: "center",
    color: "#c8cbde",
    
    marginBottom: '100px'
  },
  currentlyWorkingOnNote: {
    textAlign: "center",
    color: "#827e22",
    
    marginBottom: '100px'
  },
  cards: {
    marginBottom: '100px',
  },
  border1: {
    backgroundImage: `url(${border1})`,
    backgroundColor: '#ebf0f1',
    backgroundSize: 'cover',
    minHeight: '200px',
    minWidth: '100%'

  },
  border2: {
    backgroundImage: `url(${border2})`,
    backgroundColor: '#ebf0f1',
    backgroundSize: 'cover',
    minHeight: '200px',
    minWidth: '100%'

  },
  control: {
    padding: theme.spacing(2),
  },
  zoom: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.zoom}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

function App(props) {
  const classes = useStyles();
  
  
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar} >
        <Toolbar>
          <Typography variant="h6" className={classes.flex1}>
            Ana Todovic
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> window.location = 'https://github.com/todovica'}>
            <GitHubIcon />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> window.location = 'https://www.linkedin.com/in/ana-todovic-64b344134/'}>
            <LinkedInIcon  />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <Grid container className={classes.start} direction="column" justify="flex-start" alignItems="center" >
      <Avatar alt="Remy Sharp" src={avatar} className={classes.img} />
      <Typography variant="h6" component="h5" className={classes.greeting} >
        {'software developer you are looking for'}
      </Typography>
             
      </Grid>
      <Grid container direction="column" justify="flex-start" alignItems="center" >
      <Box className={classes.border1}></Box>
    </Grid>
    <Grid container direction="column" justify="flex-start" alignItems="center" >
    <Grid container className={classes.middle} direction="column" justify="flex-start" alignItems="center" >
      <Typography variant="h6" component="h5" className={classes.checkoutcode} >
        {'more about me'}
      </Typography>
      <Grid container  direction="row" justify="center" alignItems="center" className={classes.cards}>
    
        <LinkCard 
          image={githubcard}
          title={"GitHub"}
          link={'https://github.com/todovica'}
          content={'Here you can find some of my draft work.'} />
          <LinkCard 
          image={linkedincard}
          title={"LinkedIn"}
          link={'https://www.linkedin.com/in/ana-todovic-64b344134/'}
          content={'Check out my profile.'} />
          <LinkCard 
          image={cvcard}
          title={"CV"}
          link={'https://todovica.github.io/Ana%20Todovi%C4%87%20CV.pdf'}
          content={'Check out my professional resume.'} />
      </Grid>
      </Grid>
    </Grid>
    <Grid container direction="column" justify="flex-start" alignItems="center" >
      <Box className={classes.border2}></Box>
    </Grid>
    <Grid container direction="column" justify="flex-start" alignItems="center" >
    <Grid container className={classes.start} direction="column" justify="flex-start" alignItems="center" >
      <Typography variant="h6" component="h5" className={classes.currentlyWorkingOnNote} >
        {'currently working on'}
      </Typography>
      <Grid container  direction="row" justify="center" alignItems="center" className={classes.cards}>
    
        <LinkCard 
          image={githubcard}
          title={"GitHub"}
          link={'https://github.com/todovica'}
          content={'Here you can find some of my draft work'} />
          <LinkCard 
          image={dreamcatchercard}
          title={"Dream Catcher"}
          link={'https://todovica.github.io/dream-catcher/'}
          content={'Story board'} />
          <LinkCard 
          image={cvcard}
          title={"CV"}
          link={'https://github.com/todovica'}
          content={'Check out my professional resume'} />
      </Grid>
      </Grid>
    </Grid>
    <BottomNavigation >
      <BottomNavigationAction label="Ana Todovic" value="Ana Todovic" icon={'by Ana Todovic'} />
    </BottomNavigation>
    <ScrollTop {...props}>
      <Grid container direction="row" justify="center" alignItems="center" >
        <Fab color="secondary" aria-label="scroll back to top" style={{ backgroundColor: '#827e22' }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Grid>
    </ScrollTop>
    </React.Fragment>
  );
}

export default App;
