import React from 'react';

const dudData = [
    {
        senderId: "guy",
        text: "testing out here"
    }, 
    {
        senderId: "girl",
        text: "other test away"
    }
]

class MessageList extends React.Component {

    state = {
        messages: dudData
    }

    render () {
        return (
            <ul className="message-list">
                {this.state.messages.map(message => {
                    return (
                        <li key={message.id}>
                            <div>
                                {message.senderId}
                            </div>
                            <div>
                                {message.text}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MessageList;