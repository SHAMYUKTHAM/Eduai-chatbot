import { useState } from "react";

function ChatInput({ onSendMessage }) {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onSendMessage(input);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Ask EduAI anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">
        Send
      </button>

    </form>
  );
}

export default ChatInput;