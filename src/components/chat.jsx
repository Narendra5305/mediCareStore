import React from "react";

function formatAIText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
}

const Chat = ({ from, text }) => {
  const html = from === "ai" ? formatAIText(text) : text;

  return (
    <div
      className={`chat-bubble ${from === "ai" ? "ai-reply" : "user-msg"}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Chat;
