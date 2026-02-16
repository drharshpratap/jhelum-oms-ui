export const documentsSeed = [
  {
    id: "doc-1",
    title: "Client Contract.pdf",
    type: "pdf",
    uploadedAt: "2026-02-10",
    client: { id: "c-1", name: "Acme Corp" },
    task: { id: "t-1", title: "Onboarding Review" },
    owner: "Admin User",
    previewUrl: "/assets/experience/1.jpg"
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
