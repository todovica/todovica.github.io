import React from 'react';
import logo from './logo.png';
import MobileStoreButton from 'react-mobile-store-button';

function Home() {

    const androidUrl = 'https://play.google.com/store/apps/details?id=com.todovica.rnfserver';
        

    return (<div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-margin-bottom">
        <p>This app will help you find climbing partners! Check it out!</p>
        </div>
         
         <div className="App-download-button">
                <MobileStoreButton
                  store="android"
                  url={androidUrl}
                  linkProps={{ title: 'Android version of the app is here!' }}
                />
            </div>

            
      </div>);
  }

export default Home;