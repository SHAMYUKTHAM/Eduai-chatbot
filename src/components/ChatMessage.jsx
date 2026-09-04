function ChatMessage({ message, sender }) {
  return (
    <div>
      <strong>
        {sender === "bot" ? "🤖 EduAI" : "👤 You"}
      </strong>

      <p>{message}</p>
    </div>
  );
}

export default ChatMessage;