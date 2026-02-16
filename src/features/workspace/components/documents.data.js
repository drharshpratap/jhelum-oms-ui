export const documentsSeed = [
  {
    id: "doc-1",
    title: "Client Contract.pdf",
    type: "image",
    uploadedAt: "2026-02-10",
    client: { id: "c-1", name: "Acme Corp" },
    task: { id: "t-1", title: "Onboarding Review" },
    owner: "Admin User",
    previewUrl: "/assets/experience/2.jpg"
  },
  {
    id: "doc-3",
    title: "Site Plan.pdf",
    type: "image",
    uploadedAt: "2026-02-12",
    client: { id: "c-2", name: "Globex Ltd" },
    task: { id: "t-2", title: "Workspace Setup" },
    owner: "Client Manager",
    previewUrl: "/assets/experience/3.jpg"
  },
  {
    id: "doc-4",
    title: "Invoice.pdf",
    type: "image",
    uploadedAt: "2026-02-15",
    client: { id: "c-3", name: "Initech" },
    task: { id: "t-3", title: "Approval Cycle" },
    owner: "Financial Manager",
    previewUrl: "/assets/experience/4.jpg"
  },
  {
    id: "doc-2",
    title: "Site Photo.png",
    type: "image",
    uploadedAt: "2026-02-12",
    client: { id: "c-2", name: "Globex Ltd" },
    task: { id: "t-2", title: "Workspace Setup" },
    owner: "Client Manager",
    previewUrl: "/assets/experience/2.jpg"
  }
];
