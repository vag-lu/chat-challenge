import React, { Component } from 'react'
import Message from "../Message"

import './index.css'

class PlaceHolderMessage extends Component {

    componentDidUpdate() {
        const element = document.querySelector('.placeHolder');
        const observer = new MutationObserver(() => {
            element.scrollTop = element.scrollHeight;
        });
        const config = { childList: true };
        observer.observe(element, config);
    }

    render() {

        const {
            msgToShow,
            selectedChannel
        } = this.props

        return (
            <div className="placeWrapper">
                <div className="placeHeader">
                    {selectedChannel !== null && <span># {selectedChannel.name}</span>}
                </div>
                <div ref={(el) => { this.messagesEnd = el; }} className="placeHolder">
                    {msgToShow.map((message) => (
                        <Message message={message} />
                    ))}
                </div>
                <div className="placeMessageInput"></div>
            </div>
        )
    }
}

export default PlaceHolderMessage