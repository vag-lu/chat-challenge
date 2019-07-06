import React, { Component } from 'react'
import "./index.css"

class ChannelList extends Component {

    render() {
        const {
            channelsList,
            handleChannelClick
        } = this.props

        return (
            <div className="channel-list">
                <div className="company-name">
                    XYZ Company
                </div>
                <h4 className="channel-title">Channels</h4>
                {channelsList.map((ch) => (
                    <div className={`channel-link ${ch.totalUnread > 0 ? "unread-channel" : ""}`}
                         onClick={() => handleChannelClick(ch)}># {ch.name}
                         {ch.totalUnread > 0 ? <div className="total-unread">{ch.totalUnread}</div>: ""}</div>
                ))}
            </div>
        )
    }
}

export default ChannelList