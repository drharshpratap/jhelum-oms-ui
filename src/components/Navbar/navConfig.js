export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },

  // Feature-flag controlled entries
  { label: "Customer", path: "/clients", featureKey: "clients" },
  { label: "Workspace", path: "/workspace", featureKey: "workspace" },
  { label: "Inbox", path: "/inbox", featureKey: "inbox" },

  { label: "Admin", path: "/admin" }
];
