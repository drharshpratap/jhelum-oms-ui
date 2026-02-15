
import { useLocation } from "react-router-dom";

const documents = [
  { id: 1, name: "Invoice_Q1.pdf", type: "PDF", status: "Uploaded" },
  { id: 2, name: "Contract.docx", type: "Word", status: "Pending" },
  { id: 3, name: "Report.xlsx", type: "Excel", status: "Approved" },
];

export default function DocumentList() {
  const location = useLocation();
  const successMessage = location.state?.successMessage;

  return (
    <>
      {successMessage && (
        <div
          style={{
            background: "#e6f4ea",
            color: "#1e4620",
            padding: "12px 16px",
            borderRadius: "6px",
            marginBottom: "20px",
            border: "1px solid #b7dfc2"
          }}
        >
          {successMessage}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {documents.map((doc) => (
          <div
            key={doc.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              background: "#fff"
            }}
          >
            <h4>{doc.name}</h4>
            <p>Type: {doc.type}</p>
            <p>Status: {doc.status}</p>
          </div>
        ))}
      </div>
    </>
  );
}
