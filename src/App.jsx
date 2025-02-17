import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Message from './components/Message';
import Prices from './components/Prices';
import Copyright from './components/Copyright';
import Runner from './components/Runner';


const App = () => {
  return (
    <>
          <Navbar/>
          <Hero/>
          <Services/>
          <Benefits/>
          <Message/>
          <Prices/>
          <Runner/>
          <Copyright/>
    </>
  )
}

export default App