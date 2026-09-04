function ChatMessage({ message, sender }) {
  const isBot = sender === "bot";

  return (
    <div className={`message-row ${isBot ? "bot-row" : "user-row"}`}>
      <div className={`message-bubble ${isBot ? "bot-message" : "user-message"}`}>
        

        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;