import React from 'react';
import { ChatkitProvider, ChatManager, TokenProvider, withChatkit } from "@pusher/chatkit-client-react"
import "./style.css";

const instanceLocator = "v1:us1:dfcf9bdc-62b3-40fc-b6ff-57ebe9fbdd70";
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfcf9bdc-62b3-40fc-b6ff-57ebe9fbdd70/token";
const username = "JakeG";
const roomId = `4cfd39a9-6b51-4065-9c8b-cc1e67a8f8b9`;
const userId = "JakeG";
const tokenProvider = new TokenProvider({url: testToken});


function MessageList() {
    const WelcomeMessage = withChatkit(props => {
        return (
            <div>
                {props.chatkit.isLoading
                ? "Connecting to Chatkit..."
            : `Hello ${props.chatkit.currentUser.name}`}
            </div>
        )
    })

    return (
        <div className="message-list">
            <ChatkitProvider
            instanceLocator={instanceLocator}
            tokenProvider={tokenProvider}
            userId={userId}
            >
            <WelcomeMessage />
            </ChatkitProvider>
        </div>
    )
}

export default MessageList;