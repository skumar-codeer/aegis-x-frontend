import { useState } from "react";

export default function VoiceAnalyzer() {
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState(null);

  const handleVoice = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    // Simulated deepfake detection
    const score = Math.floor(60 + Math.random() * 35);

    setResult({
      score,
      verdict: score > 75 ? "DEEPFAKE SUSPECTED" : "LIKELY GENUINE",
      reasons: [
        "Abnormal pitch variation",
        "Synthetic MFCC patterns",
        "Temporal inconsistency"
      ]
    });
  };

  return (
    <div className="card blue-glow" style={{ marginTop: "20px" }}>
      <h3 style={{ color: "#3b82f6" }}>
        🎙️ Voice Deepfake Analyzer
      </h3>

      <input
        type="file"
        accept=".wav,.mp3"
        onChange={handleVoice}
        style={{ marginTop: "10px" }}
      />

      {fileName && (
        <p style={{ fontSize: "0.85rem", marginTop: "5px" }}>
          File: {fileName}
        </p>
      )}

      {result && (
        <div style={{ marginTop: "15px" }}>
          <p>
            <strong>Deepfake Risk Score:</strong> {result.score}/100
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{
              color:
                result.verdict.includes("DEEPFAKE")
                  ? "#ff4d4d"
                  : "#22c55e"
            }}>
              {result.verdict}
            </span>
          </p>

          <p style={{ marginTop: "8px" }}>
            <strong>Indicators:</strong>
          </p>
          <ul>
            {result.reasons.map((r, i) => (
              <li key={i}>⚠️ {r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
