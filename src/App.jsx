import "./App.css";

import ChatHeader from "./components/ChatHeader";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

function App() {
  return (
    <div className="app">

      <div className="chat-container">

        <ChatHeader />

        <main className="chat-window">

          <ChatMessage
            sender="bot"
            message="Hi! 👋 I'm EduAI. What would you like to learn today?"
          />

          <ChatMessage
            sender="user"
            message="What is Artificial Intelligence?"
          />

          <ChatMessage
            sender="bot"
            message="Artificial Intelligence is a technology that allows computers to perform tasks that normally require human intelligence."
          />

        </main>

        <ChatInput />

      </div>

    </div>
  );
}

export default App;