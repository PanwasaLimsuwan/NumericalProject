import React, { Component } from 'react';
/* import './App.css'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import BisectionFill from './logic/BisectionFill';
import AppRouter from './AppRouter';

class App extends Component {
  nextPath(path) {
    this.props.history.push(path)
  }

  render() {
    return (
      <div className='App'>

        <AppRouter />

      </div>
    );
  }
}

export default App;
