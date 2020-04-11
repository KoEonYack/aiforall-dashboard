import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import HeaderPage from './pages/Header'
import Container from './pages/Container'

const App = () => {
  return (
      <Router>
        <HeaderPage />
        <Container />
      </Router>
  );
};

export default App;