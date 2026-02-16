import React, { useMemo, useState } from "react";
import { documentsSeed } from "./documents.data";
import DocumentTable from "./DocumentTable";
import DocumentInspector from "./DocumentInspector";
import DocumentUpload from "../DocumentUpload";
import "../style/documents.css";

export default function DocumentHub() {
  const [documents, setDocuments] = useState(documentsSeed);
  const [activeId, setActiveId] = useState(documents[0]?.id);

  const activeDoc = useMemo(
    () => documents.find((d) => d.id === activeId),
    [documents, activeId]
  );

  function handleDelete(id) {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
    if (activeId === id) setActiveId(null);
  }

  function handleUpload(file, client, task) {
    const previewUrl = URL.createObjectURL(file);

    const newDoc = {
      id: `doc-${Date.now()}`,
      title: file.name,
      type: file.type.includes("pdf") ? "pdf" : "image",
      uploadedAt: new Date().toISOString().slice(0, 10),
      client,
      task,
      owner: "You",
      previewUrl
    };

    setDocuments((prev) => [newDoc, ...prev]);
    setActiveId(newDoc.id);
  }

  return (
    <div className="docHub">
      <DocumentUpload onUpload={handleUpload} />

      <div className="docGrid">
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
