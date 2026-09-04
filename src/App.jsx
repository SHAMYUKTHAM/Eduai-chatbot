import { useState } from "react";
import "./App.css";

import ChatHeader from "./components/ChatHeader";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

function App() {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      message: "Hi! 👋 I'm EduAI. What would you like to learn today?"
    }
  ]);

  const handleSendMessage = (message) => {

    if (!message.trim()) return;

    // Add user's message
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "user",
        message: message
      }
    ]);

    // Temporary EduAI response
    setTimeout(() => {

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          message:
            "That's a great question! 🤖 I'm EduAI and I'm here to help you learn."
        }
      ]);

    }, 500);
  };

  return (
    <div className="app">

      <div className="chat-container">

        <ChatHeader />

        <main className="chat-window">

          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}

        </main>

        <ChatInput onSendMessage={handleSendMessage} />

      </div>

    </div>
  );
}

export default App;