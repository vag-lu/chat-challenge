import React, {Component} from 'react'
import "./index.css"

import Channels from '../../api/data/channels'

class ChannelList extends Component{

    render() {
        return (
            <div className="channel-list">
                { Channels.map((ch) => (
                    <div className="channel-link"># {ch.name}</div>
                ))}
            </div>
        )
    }
}

export default ChannelList