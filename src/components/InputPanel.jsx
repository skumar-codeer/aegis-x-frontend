import { useState } from "react";

export default function InputPanel({ onAnalyze }) {
  const [text, setText] = useState("");

  const handleAnalyze = () => {
    if (!text.trim()) return;
    onAnalyze(text);
  };

  return (
    <div className="card red-glow">
      <h3 style={{ color: "#ff4d4d" }}>
        📥 Paste Email / Message / Text
      </h3>

      <textarea
        placeholder="Paste phishing email, SMS, or message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "140px",
          backgroundColor: "#020617",
          color: "#e5e7eb",
          border: "1px solid #ff4d4d",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "10px"
        }}
      />

      <button
        className="attack-btn"
        onClick={handleAnalyze}
        style={{ marginTop: "10px" }}
      >
        🧪 Analyze Threat
      </button>
    </div>
  );
}
