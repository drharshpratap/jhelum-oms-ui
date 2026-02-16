import React, { useMemo, useState } from "react";
import { documentsSeed } from "./documents.data";
import DocumentTable from "./DocumentTable";
import DocumentInspector from "./DocumentInspector";
import DocumentUpload from "../DocumentUpload";

export default function DocumentHub() {
  const [documents, setDocuments] = useState(documentsSeed);
  const [activeId, setActiveId] = useState(documents[0]?.id);

  const activeDoc = useMemo(
    () => documents.find((d) => d.id === activeId),
    [documents, activeId]
  );

  function handleDelete(id) {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
    if (activeId === id) {
      setActiveId(null);
    }
  }

  function handleUpload(file) {
    const previewUrl = URL.createObjectURL(file);

    const newDoc = {
      id: `doc-${Date.now()}`,
      title: file.name,
      type: file.type.includes("pdf") ? "pdf" : "image",
      uploadedAt: new Date().toISOString().slice(0, 10),
      client: { id: "c-x", name: "Demo Client" },
      task: { id: "t-x", title: "Demo Task" },
      owner: "You",
      previewUrl
    };

    setDocuments((prev) => [newDoc, ...prev]);
    setActiveId(newDoc.id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <DocumentUpload onUpload={handleUpload} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 16 }}>
        <DocumentTable
          documents={documents}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <DocumentInspector document={activeDoc} onDelete={handleDelete} />
      </div>
    </div>
  );
}
