import React, { useState, useRef, useEffect } from "react";
import Chat from "./chat";
import "./componentCss/chat.css";

function ChatBoat() {
    const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: userInput }]);
    setIsLoading(true);
    const currentInput = userInput;
    setUserInput("");

    try {
      const res = await fetch("https://demstorebackend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { from: "ai", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "❌ AI Error: Try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <h2 className="chat-heading">💬 Skincare AI Assistant</h2>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <Chat key={idx} from={msg.from} text={msg.text} />
        ))}
        {isLoading && <div className="chat-bubble ai-reply">Typing...</div>}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Describe your skin issue..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBoat;
