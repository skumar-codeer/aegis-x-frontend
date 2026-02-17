export default function AboutUs() {
  return (
    <div className="card" style={{ maxWidth: "800px" }}>
      <h2 style={{ marginBottom: "5px" }}>🛡️ AEGIS-X</h2>
      <p style={{ color: "#9ca3af", marginBottom: "20px" }}>
        AI-Powered Fraud & GenAI Threat Defense Platform
      </p>

      <h3>🎯 Vision</h3>
      <p>
        Building resilient, privacy-first defenses against AI-driven fraud
        through continuous adversarial learning.
      </p>

      <h3 style={{ marginTop: "20px" }}>🏫 Institution</h3>
      <p>SRM Institute of Science and Technology, Chennai</p>

      <h3 style={{ marginTop: "20px" }}>👥 Team SHIELD</h3>
      <ul>
        <li><strong>Shivam Kumar</strong> — Team Lead | Frontend & Backend Engineering</li>
        <li><strong>Sujal Singh</strong> — ML / AI Models</li>
        <li><strong>Nirbhay Kumar</strong> — Security Research & Threat Analysis</li>
        <li><strong>Arun Beniwal</strong> — Integration & Testing</li>
        <li><strong>Senjuti Chhatait</strong> — Product Design & Documentation</li>
      </ul>

      <h3 style={{ marginTop: "20px" }}>🔐 Privacy & Ethics</h3>
      <p>
        AEGIS-X is designed with privacy by default. All analysis is performed
        locally within the system. No sensitive user data is stored or transmitted
        outside the environment.
      </p>

      <p style={{ marginTop: "20px", color: "#22c55e" }}>
        ✔ Built for secure, transparent, and responsible AI defense
      </p>
    </div>
  );
}
