
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DocumentUpload() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate successful upload
    navigate("/documents", {
      state: { successMessage: "Document uploaded successfully." }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
      <h3>Upload Document</h3>

      <div style={{ marginTop: "16px" }}>
        <input
          type="text"
          placeholder="Document title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: "20px",
          padding: "10px 16px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px"
        }}
      >
        Upload
      </button>
    </form>
  );
}
