import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ChatMessage({ message, sender }) {
  const isBot = sender === "bot";

  return (
    <div className={`message-row ${isBot ? "bot-row" : "user-row"}`}>
      <div
        className={`message-bubble ${
          isBot ? "bot-message" : "user-message"
        }`}
      >
        {isBot ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message}
          </ReactMarkdown>
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;