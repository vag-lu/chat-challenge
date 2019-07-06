import React, { Component } from 'react'

import './index.css'

class Message extends Component {

    render() {

        const {
            message
        } = this.props

        return (
            <div>
                <div className="message-head">
                    <div className="username">{message.user.username}</div>
                    <div className="timestamp">{message.timestamp}</div>
                </div>
                <div className="messaage-content">{message.content}</div>
            </div>
        )
    }
}

export default Message