import React from 'react';
import logo from './logo.svg';
import MessageList from "./components/MessagesList"
import './App.css';

 function App() {
   
    return (
      <div className="application">
        {/* <Title /> */}
        <MessageList />
        {/* <SendMessageFrom /> */}
      </div>
    )

}

export default App;
