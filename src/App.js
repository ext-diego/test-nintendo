import { useEffect } from "react";
import app from "firebase/app";
import functions from "firebase-functions"

import logo from './logo.svg';
import './App.css';

const App = () => {
  useEffect(() => {
    console.log('app', app)
    console.log('functions', functions)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
