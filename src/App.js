import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import HeaderPage from './pages/Header'
import Container from './pages/Container'
import Lectures from './pages/Lectures'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;



const App = () => {
  return (
      <Router>
        <HeaderPage />
        <Container />
      </Router>
  );
};

export default App;