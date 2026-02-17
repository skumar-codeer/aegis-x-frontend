import { useState } from "react";

export default function UrlAnalyzer({ onAnalyze }) {
  const [url, setUrl] = useState("");

  const handleCheck = () => {
    if (!url.trim()) return;
    onAnalyze(url);
  };

  return (
    <div className="card red-glow">
      <h3 style={{ color: "#ff4d4d" }}>
        🌐 Website / URL Analyzer
      </h3>

      <input
        type="text"
        placeholder="https://secure-bank-login.example"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#020617",
          color: "#e5e7eb",
          border: "1px solid #ff4d4d",
          borderRadius: "8px"
        }}
      />

      <button
        className="attack-btn"
        onClick={handleCheck}
        style={{ marginTop: "10px" }}
      >
        🔍 Analyze Website
      </button>
    </div>
  );
}
