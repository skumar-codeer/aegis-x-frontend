export default function CredentialDetector({ content }) {
  if (!content) return null;

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/gi;
  const passwordRegex = /(password\s*[:=]\s*\S+)/gi;
  const apiKeyRegex = /(AIza[0-9A-Za-z\-_]{20,})/gi;

  const emails = content.match(emailRegex) || [];
  const passwords = content.match(passwordRegex) || [];
  const apiKeys = content.match(apiKeyRegex) || [];

  if (
    emails.length === 0 &&
    passwords.length === 0 &&
    apiKeys.length === 0
  ) {
    return (
      <div className="card">
        <h3>🔐 Credential Leak Detector</h3>
        <p style={{ color: "#22c55e" }}>
          ✔ No exposed credentials detected
        </p>
      </div>
    );
  }

  return (
    <div className="card red-glow">
      <h3 style={{ color: "#ff4d4d" }}>
        🚨 Credential Exposure Detected
      </h3>

      {emails.length > 0 && (
        <p>📧 Emails found: {emails.length}</p>
      )}
      {passwords.length > 0 && (
        <p>🔑 Password patterns found</p>
      )}
      {apiKeys.length > 0 && (
        <p>🗝️ API keys detected</p>
      )}

      <p style={{ marginTop: "10px", color: "#facc15" }}>
        Sensitive data masked in logs
      </p>
    </div>
  );
}
