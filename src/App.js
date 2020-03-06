import React from 'react';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import MainPage from './components/MainPage.js';
import RocketRecover from './components/RocketRecover.js';
import QuickLinks from './components/QuickLinks.js';
import Shifter from './components/Shifter.js';
import Image from 'react-bootstrap/Image';
import About from './components/About.js';
import logo from './images/CSSLogo.png';
import Main from './components/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{width: '100%'}}>
        <div className="mainArea" style={{height: '100%'}}>
          <MainPage />
          <Footer />
        </div>
    </div>
  );
}

export default App;
