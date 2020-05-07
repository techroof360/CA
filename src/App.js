import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route,  BrowserRouter , Redirect } from "react-router-dom";

import Home from './components/myhome/Home';
import Demo from './components/demo/Demo';
import Footer from './components/footer/Footer';
import HowItsWork from './components/HowItWork/howItsWork';
import Pricing from './components/pricing/Pricing';
import Download from './components/download/Download';
import Support from './components/support/Support';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Header/>
    <Route exact path="/" component={Home} />
    <Route exact path="/myhome" component={Demo} />
    <Route exact path="/tour" component={HowItsWork} />
    <Route exact path="/pricing" component={Pricing} />
    <Route exact path="/download_win" component={Download} />
    <Route exact path="/support" component={Support} />

    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
