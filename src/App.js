import React, { Component } from 'react';
import ChannelList from "./containers/ChannelList/index"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChannelList/>
      </div>
    );
  }
}

export default App;
