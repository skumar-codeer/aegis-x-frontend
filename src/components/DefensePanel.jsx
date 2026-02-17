import { useEffect, useRef } from "react";
import RiskMeter from "./RiskMeter";
import { playAlert } from "../utils/alertSound";

export default function DefensePanel({ content, risk, explanation }) {

  const alertedRef = useRef(false);
  const score = risk || 0;

  useEffect(() => {

    if (!content) return;

    if (score >= 80 && !alertedRef.current) {
      playAlert();
      alertedRef.current = true;
    }

    if (score < 80) {
      alertedRef.current = false;
    }

  }, [score, content]);

  if (!content) {
    return (
      <div className="card blue-glow" style={{ marginTop: "20px" }}>
        <h3>🔵 Defense AI (IDLE)</h3>
        <p>Waiting for input…</p>
      </div>
    );
  }

  return (
    <div className="card blue-glow" style={{ marginTop: "20px" }}>
      <h3>🔵 Defense AI (ACTIVE)</h3>

      <RiskMeter score={score} />

      <ul>
        {explanation &&
          explanation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}
