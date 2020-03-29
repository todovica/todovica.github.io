import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Home from './Home';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';


const useStyles = makeStyles(theme => ({
  flex1: {
    flexGrow: 1,
  },
  appbar: {
    color: 'white',
    backgroundColor: '#3A606E'
  },
  homeTab: {
    backgroundColor: '#3A606E'
  },
  zoom: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  indicator: {
    backgroundColor: '#FFF'
  },
  bottomNavigation: {
    backgroundColor: '#3A606E'
  }
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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function App(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar} >
        <Toolbar>
          <Typography variant="h6" className={classes.flex1}>
            {'Rock & Friends'}
          </Typography>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" classes={{ indicator: classes.indicator }}>
            <Tab className={classes.homeTab} label="Home" />
            <Tab label="Terms Of Use" />
            <Tab label="Privacy Policy" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      
      <TabPanel className={classes.homeTab} value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TermsOfService />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PrivacyPolicy />
      </TabPanel>
      
      
      <BottomNavigation className={classes.bottomNavigation}>
        <BottomNavigationAction label='Rock \& Friends' value='Rock \& Friends' icon={'by Rock \& Friends'} />
      </BottomNavigation>
      <ScrollTop {...props}>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Fab color="secondary" aria-label="scroll back to top" style={{ backgroundColor: '#C1C1C1' }}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Grid>
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
