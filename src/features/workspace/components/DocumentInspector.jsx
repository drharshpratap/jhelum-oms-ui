import React from "react";

export default function DocumentInspector({ document, onDelete }) {
  if (!document) {
    return (
      <div className="docCard" style={{ padding: 16 }}>
        Select a document to preview
      </div>
    );
  }

  const fileType = (document.type || "").toLowerCase();
  const isPdf = fileType === "pdf";
  const isImage = fileType === "image";

  return (
    <div className="docCard" style={{ padding: 16 }}>
      <div style={{ fontWeight: 800, marginBottom: 6 }}>
        {document.title}
      </div>

      <div className="docMeta" style={{ marginBottom: 12 }}>
        Client: {document.client.name} <br />
        Task: {document.task.title} <br />
        Uploaded: {document.uploadedAt}
      </div>

      <div className="previewBox" style={{ marginBottom: 12 }}>
        {isPdf && (
          <div style={{ padding: 14 }}>
            <div className="docMeta" style={{ marginBottom: 10 }}>
              PDF previews open in a new tab for best stability.
            </div>

            <a
              href={document.previewUrl}
              target="_blank"
              rel="noreferrer"
              className="buttonPrimary"
              style={{
                textDecoration: "none",
                display: "inline-block"
              }}
            >
              Open PDF
            </a>
          </div>
        )}

        {isImage && (
          <img
            key={document.id}
            src={document.previewUrl}
            alt="preview"
            style={{ width: "100%", display: "block" }}
          />
        )}

        {!isPdf && !isImage && (
          <div className="docMeta" style={{ padding: 12 }}>
            Preview unavailable for this file type.
          </div>
        )}
      </div>

      <button onClick={() => onDelete(document.id)} className="buttonDanger">
        Delete Document
      </button>
    </div>
  );
}
