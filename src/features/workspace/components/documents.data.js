export const documentsSeed = [
  {
    id: "doc-4",
    title: "Invoice.pdf",
    type: "pdf",
    uploadedAt: "2026-02-15",
    client: { id: "c-3", name: "Initech" },
    task: { id: "t-3", title: "Approval Cycle" },
    owner: "Financial Manager",
    previewUrl: "/assets/demo-document.pdf"
  },
  {
    id: "doc-2",
    title: "Site Photo.png",
    type: "image",
    uploadedAt: "2026-02-12",
    client: { id: "c-2", name: "Globex Ltd" },
    task: { id: "t-2", title: "Workspace Setup" },
    owner: "Client Manager",
    previewUrl: "/assets/2.jpg"
  }
];
