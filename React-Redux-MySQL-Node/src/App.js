import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';


import Messages from './components/Messages'
import MessageForm from './components/MessageForm'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React && Redux</h1>
        </header>

        <MessageForm />
        <hr />
        <Messages />
      </div>
      </Provider>
    );
  }
}

export default App;
