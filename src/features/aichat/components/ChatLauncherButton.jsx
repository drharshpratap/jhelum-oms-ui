import { useState } from "react";

export default function ChatLauncherButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    const botMessage = {
      role: "assistant",
      text: "This is a mock AI response.",
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 340,
            height: 460,
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            zIndex: 9999,
          }}
        >
          {/* messages */}
          <div
            style={{
              flex: 1,
              padding: 12,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  background:
                    m.role === "user" ? "#2563eb" : "#f3f4f6",
                  color: m.role === "user" ? "#ffffff" : "#111827",
                  padding: "8px 12px",
                  borderRadius: 10,
                  maxWidth: "80%",
                  fontSize: 14,
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: 12,
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              gap: 8,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: 8,
                borderRadius: 6,
                border: "1px solid #d1d5db",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "8px 12px",
                background: "#111827",
                color: "#ffffff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Go
            </button>
          </form>
        </div>
      )}

      {/* launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#111827",
          color: "#ffffff",
          border: "none",
          borderRadius: 24,
          padding: "12px 16px",
          cursor: "pointer",
          zIndex: 10000,
        }}
      >
        Chat
      </button>
    </>
  );
}
