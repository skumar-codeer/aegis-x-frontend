import { useState } from "react";

export default function ExplainDrawer({ text }) {
  const [open, setOpen] = useState(true);
  if (!text) return null;

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer"
        }}
        onClick={() => setOpen(!open)}
      >
        <h3>🧠 Explainable AI</h3>
        <span>{open ? "▾" : "▸"}</span>
      </div>

      {open && (
        <>
          <ul>
            <li>High urgency & fear-based language</li>
            <li>Impersonation of trusted authority</li>
            <li>Credential verification intent</li>
          </ul>
          <p style={{ color: "#22c55e" }}>
            ✔ Defense model adapted
          </p>
        </>
      )}
    </div>
  );
}
