import { useEffect } from "react";
import app from "firebase/app";
import "firebase/messaging";

import logo from './logo.svg';
import './App.css';

const App = () => {
  useEffect(() => {
    const config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    };
    app.initializeApp(config);
    const messaging = app.messaging();
    messaging
      .requestPermission()
      .then(() => {
        console.log('messaging.getToken', messaging.getToken());
      })

    console.log('app', app)
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
