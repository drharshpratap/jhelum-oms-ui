import React from "react";

export default function DocumentTable({ documents, activeId, onSelect }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ padding: 12, fontWeight: 600 }}>Documents</div>

      {documents.map((doc) => (
        <div
          key={doc.id}
          onClick={() => onSelect(doc.id)}
          style={{
            padding: 12,
            cursor: "pointer",
            background: activeId === doc.id ? "#f5f5f5" : "white",
            borderTop: "1px solid #eee"
          }}
        >
          <div style={{ fontWeight: 500 }}>{doc.title}</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>
            {doc.client.name} • {doc.task.title}
          </div>
        </div>
      ))}
    </div>
  );
}
