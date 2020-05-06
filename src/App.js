import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route,  BrowserRouter , Redirect } from "react-router-dom";

import Home from './components/myhome/Home';
import Demo from './components/demo/Demo';
import Footer from './components/footer/Footer';
import HowItsWork from './components/HowItWork/howItsWork';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Header/>
    <Route exact path="/" component={Home} />
    <Route exact path="/myhome" component={Demo} />
    <Route exact path="/tour" component={HowItsWork} />

    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
