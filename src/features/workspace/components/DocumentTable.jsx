import React from "react";

export default function DocumentTable({ documents, activeId, onSelect }) {
  return (
    <div className="docCard">
      <div className="docHeader">Documents</div>

      {documents.map((doc) => (
        <div
          key={doc.id}
          onClick={() => onSelect(doc.id)}
          className={"docRow " + (activeId === doc.id ? "docRowActive" : "")}
        >
          <div style={{ fontWeight: 600 }}>{doc.title}</div>
          <div className="docMeta">
            {doc.client.name} • {doc.task.title}
          </div>
        </div>
      ))}
    </div>
  );
}
