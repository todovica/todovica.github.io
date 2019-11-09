import React from 'react';
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


const useStyles = makeStyles(theme => ({
  root: {
   
  },
  start: {
    paddingTop: '70px',
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
    padding: '20px',
    marginBottom: '100px'
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
}));



function App() {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
}

export default App;
