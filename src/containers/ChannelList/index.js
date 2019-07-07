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
                <ul>
                    {channelsList.map((ch) => (
                        <li key={ch.id} className={`channel-link ${ch.totalUnread > 0 ? "unread-channel" : ""}`}
                            onClick={() => handleChannelClick(ch)}># {ch.name}
                            {ch.totalUnread > 0 ? <div className="total-unread">{ch.totalUnread}</div> : ""}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ChannelList