export default function ThreatFeed({ logs }) {
  return (
    <div className="card red-glow" style={{ height: "100%" }}>
      <h3 style={{ color: "#ff4d4d" }}>⚠️ Threat Feed</h3>

      {logs.length === 0 && (
        <p style={{ color: "#9ca3af" }}>No attacks yet</p>
      )}

      {logs.map((log, i) => (
        <div key={i} style={{
          fontSize: "0.85rem",
          marginTop: "8px",
          borderBottom: "1px dashed #374151"
        }}>
          🔴 {log}
        </div>
      ))}
    </div>
  );
}
