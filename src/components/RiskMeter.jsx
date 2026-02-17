export default function RiskMeter({ score }) {
  const isHigh = score >= 80;

  const meterStyle = {
    width: `${score}%`,
    height: "100%",
    background: isHigh ? "#ef4444" : "#38bdf8",
    transition: "all 0.4s ease",
    boxShadow: isHigh
      ? "0 0 30px rgba(239,68,68,0.6)"
      : "0 0 20px rgba(56,189,248,0.3)"
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{
          height: "14px",
          background: "#020617",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #1f2937"
        }}
      >
        <div style={meterStyle} />
      </div>

      <p style={{ marginTop: "6px", color: "#9ca3af" }}>
        Risk Score: <strong>{score}</strong>
      </p>
    </div>
  );
}
