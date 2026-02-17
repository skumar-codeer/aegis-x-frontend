import { useState } from "react";

export default function DragDropUpload({ onLoad }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onLoad(reader.result);
    };
    reader.readAsText(file);
  };

  return (
    <div
      className="card"
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        border: dragging ? "2px dashed #22c55e" : "2px dashed #64748b",
        marginTop: "15px",
        textAlign: "center",
        padding: "25px"
      }}
    >
      <h3>📂 Drag & Drop File</h3>
      <p style={{ color: "#9ca3af" }}>
        Drop .txt or .eml phishing files here
      </p>
    </div>
  );
}
