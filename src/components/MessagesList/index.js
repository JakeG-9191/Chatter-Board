import React from 'react';
import { ChatManager, TokenProvider } from "@pusher/chatkit-client"
import "./style.css";

const instanceLocator = "v1:us1:dfcf9bdc-62b3-40fc-b6ff-57ebe9fbdd70";
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfcf9bdc-62b3-40fc-b6ff-57ebe9fbdd70/token";
const username = "JakeG";
const roomId = `4cfd39a9-6b51-4065-9c8b-cc1e67a8f8b9`

class MessageList extends React.Component {

    state = {
        messages: []
    }

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator,
            userId: "jakeDoe",
            tokenProvider: new TokenProvider({
                url: testToken
            })
        })
        chatManager.connect().then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: roomId,
                hooks: {
                    onNewMessage: message => {
                        this.setState({ messages: [...this.state.messages, message]})
                    }
                }
            })
        })
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