import React from 'react';
import logo from './logo.svg';
import './App.css';

const dudData = [
  {
    senderID: "someone",
    text: "this is a test"
  }, {
    senderID: "another guy",
    text: "still working through"
  }
]

class App extends React.Component {

  render () {
    return (
      <div className="application">
        <Title />
        <MessageList />
        <SendMessageFrom />
      </div>
    )
  }
}

export default App;
