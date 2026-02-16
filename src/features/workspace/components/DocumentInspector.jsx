import React from "react";

export default function DocumentInspector({ document, onDelete }) {
  if (!document) {
    return (
      <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
        Select a document to preview
      </div>
    );
  }

  const isPdf = document.type === "pdf";
  const isImage = document.type === "image";

  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>{document.title}</div>

      <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 12 }}>
        Client: {document.client.name} <br />
        Task: {document.task.title} <br />
        Uploaded: {document.uploadedAt}
      </div>

      <div style={{ marginBottom: 12 }}>
        {isPdf && (
          <iframe
            title="pdf-preview"
            src={document.previewUrl}
            style={{ width: "100%", height: 220, borderRadius: 8 }}
          />
        )}

        {isImage && (
          <img
            src={document.previewUrl}
            alt="preview"
            style={{ width: "100%", borderRadius: 8 }}
          />
        )}

        {!isPdf && !isImage && (
          <div style={{ fontSize: 13, opacity: 0.6 }}>
            Preview unavailable for this file type.
          </div>
        )}
      </div>

      <button
        onClick={() => onDelete(document.id)}
        style={{
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #ddd",
          cursor: "pointer"
        }}
      >
        Delete Document
      </button>
    </div>
  );
}
