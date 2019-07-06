import React, { Component } from 'react';
import ChannelList from "./containers/ChannelList"
import PlaceHolderMessage from "./containers/PlaceHolderMessage"

import Channels from './api/data/channels'
import Messages from './api/data/messages'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      channelsList: [],
      msgToShow: [],
      selectedChannel: null
    }
  }

  componentDidMount() {
    const channelsList = Channels.map( ch => {
      let msgUnreadOfCh = Messages.filter(msg => (
        (msg.channel_id === ch.id && msg.is_unread)
      ))
      
      return {...ch, totalUnread: msgUnreadOfCh.length}
    })

    this.setState({channelsList})
  }

  handleChannelClick = (ch) => {
    
    const msgs = Messages.filter( msg => (
      msg.channel_id === ch.id
    ))
    
    const chList = this.state.channelsList.map(channel => {
      if( channel.id === ch.id){
        return {...channel, totalUnread: 0}
      } else {
        return channel
      }
    })

    this.setState({msgToShow: msgs, channelsList: chList, selectedChannel: ch})
  }

  render() {
    const {
      channelsList,
      msgToShow,
      selectedChannel
    } = this.state

    return (
      <div className="App">
        <ChannelList 
          channelsList={channelsList}
          handleChannelClick={this.handleChannelClick}/>

        <PlaceHolderMessage 
          msgToShow={msgToShow}
          selectedChannel={selectedChannel}/>
      </div>
    );
  }
}

export default App;
