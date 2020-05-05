import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route,  BrowserRouter , Redirect } from "react-router-dom";
import Home from './components/myhome/home';
import MyHome from './components/myhome/myHome';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Header/>
    <Route exact path="/" component={MyHome} />
    </BrowserRouter>
    </div>
  );
}

export default App;
