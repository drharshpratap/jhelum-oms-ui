import React, { useState } from "react";
import "./style/documents.css";

export default function DocumentUpload({ onUpload }) {
  const clientsSeed = [
    { id: "c-1", name: "Acme Corp" },
    { id: "c-2", name: "Globex Ltd" },
    { id: "c-3", name: "Initech" }
  ];

  const tasksSeed = [
    { id: "t-1", title: "Onboarding Review" },
    { id: "t-2", title: "Workspace Setup" },
    { id: "t-3", title: "Approval Cycle" }
  ];

  const [file, setFile] = useState(null);
  const [clientId, setClientId] = useState(clientsSeed[0].id);
  const [taskId, setTaskId] = useState(tasksSeed[0].id);

  function handleSubmit() {
    if (!file) return;

    const client = clientsSeed.find((c) => c.id === clientId);
    const task = tasksSeed.find((t) => t.id === taskId);

    onUpload(file, client, task);
    setFile(null);
  }

  return (
    <div className="docCard">
      <div className="docHeader">Upload Document</div>

      <div className="uploadBar">
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <select
          className="select"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        >
          {clientsSeed.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          className="select"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        >
          {tasksSeed.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>

        <button onClick={handleSubmit} className="buttonPrimary">
          Upload
        </button>
      </div>
    </div>
  );
}
