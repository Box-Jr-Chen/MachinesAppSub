import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        This is auto UI
        
        </p>
      </header>
      <AmplifySignOut></AmplifySignOut>
    </div>
  );
}

export default withAuthenticator(App);
