export default function FileUpload({ onLoad }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onLoad(reader.result);
    };

    reader.readAsText(file);
  };

  return (
    <div className="card">
      <h3>📎 Upload File</h3>
      <input
        type="file"
        accept=".txt,.eml"
        onChange={handleFile}
        style={{ marginTop: "10px" }}
      />
      <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
        Supported: .txt, .eml (PDF later via backend)
      </p>
    </div>
  );
}
