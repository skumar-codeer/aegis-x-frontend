import { useState } from "react";
import { toggleAlert } from "../utils/alertSound";

export default function TopBar() {
  const [soundOn, setSoundOn] = useState(true);

  const toggle = () => {
    const status = toggleAlert();
    setSoundOn(status);
  };

  return (
    <div style={{
      padding: "12px 20px",
      borderBottom: "1px solid #1f2937",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ color: "#e5e7eb" }}>
        🛡️ AEGIS-X War Room
      </h2>

      <button
        onClick={toggle}
        style={{
          background: "#020617",
          color: "#e5e7eb",
          border: "1px solid #374151",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {soundOn ? "🔔 Alerts ON" : "🔕 Alerts OFF"}
      </button>
    </div>
  );
}
