import { useEffect, useState } from "react";

const ATTACKS = [
  "URGENT: Verify your bank account immediately or it will be suspended.",
  "Security alert: unusual login detected. Confirm your credentials now.",
  "Your account access will be disabled today. Act immediately.",
  "We detected suspicious activity. Failure to verify will result in closure."
];

export default function AutoBattle({ onAttack }) {
  const [running, setRunning] = useState(false);
  const [round, setRound] = useState(0);
  const [currentAttack, setCurrentAttack] = useState("");

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      const attack =
        ATTACKS[Math.floor(Math.random() * ATTACKS.length)];

      setRound((r) => r + 1);
      setCurrentAttack(attack);

      // 🔴 Red attacks → 🔵 Blue analyzes
      onAttack(attack);
    }, 2500);

    return () => clearInterval(interval);
  }, [running, onAttack]);

  return (
    <div className="card red-glow">
      <h3 style={{ color: "#ef4444" }}>
        ⚔️ Red vs Blue Battle
      </h3>

      <p style={{ color: "#9ca3af" }}>
        Automated adversarial simulation between attacker (Red)
        and defense system (Blue).
      </p>

      <button
        onClick={() => setRunning(!running)}
        style={{
          marginTop: "12px",
          background: running ? "#7f1d1d" : "#14532d",
          color: "#e5e7eb",
          padding: "8px 14px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer"
        }}
      >
        {running ? "⏹ Stop Battle" : "▶️ Start Battle"}
      </button>

      <p style={{ marginTop: "10px" }}>
        <strong>Status:</strong>{" "}
        {running ? "Running" : "Idle"}
      </p>

      <p>
        <strong>Round:</strong> {round}
      </p>

      {currentAttack && (
        <div
          style={{
            marginTop: "12px",
            padding: "10px",
            border: "1px solid #7f1d1d",
            borderRadius: "8px",
            background: "rgba(127,29,29,0.15)"
          }}
        >
          <strong>🔴 Red Attack:</strong>
          <p>{currentAttack}</p>
        </div>
      )}

      <p style={{ marginTop: "10px", color: "#38bdf8" }}>
        🔵 Blue team adapting defenses in real time…
      </p>
    </div>
  );
}
