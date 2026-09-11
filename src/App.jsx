import { useEffect, useRef, useState } from "react";
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

  const [isLoading, setIsLoading] = useState(false);

  // Reference to the bottom of the chat
  const messagesEndRef = useRef(null);

  // Automatically scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, isLoading]);

  const handleSendMessage = async (message) => {
    if (!message.trim() || isLoading) return;

    // Add user's message to the chat
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "user",
        message: message
      }
    ]);

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      });

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();

      // Add Gemini response to the chat
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          message: data.response
        }
      ]);
    } catch (error) {
      console.error("Error connecting to backend:", error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          message:
            "Sorry, I couldn't connect to the EduAI server. Please try again."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
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

          {isLoading && (
            <ChatMessage
              sender="bot"
              message="EduAI is thinking... 🤔"
            />
          )}

          {/* Invisible element used for auto-scrolling */}
          <div ref={messagesEndRef} />
        </main>

        <ChatInput onSendMessage={handleSendMessage} />

      </div>
    </div>
  );
}

export default App;