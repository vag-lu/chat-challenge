import React, { Component } from 'react'
import Message from "../Message"

import './index.css'

class PlaceHolderMessage extends Component {

    render() {

        const {
            msgToShow,
            selectedChannel
        } = this.props

        return (
            <div>
                <div className="placeHeader">
                    {selectedChannel !== null && <h3># {selectedChannel.name}</h3>}
                </div>
                <div className="placeHolder">
                    {msgToShow.map((message) => (
                        <Message message={message} />
                    ))}
                </div>
            </div>
        )
    }
}

export default PlaceHolderMessage