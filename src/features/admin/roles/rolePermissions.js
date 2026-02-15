export const ROLE_PERMISSIONS = {
  Admin: ["clients", "workspace", "inbox", "admin"],
  Owner: ["clients", "workspace", "inbox"],
  Accountant: ["clients", "documents"],
  Assistant: ["inbox"],
};

export function roleAllows(role, featureKey) {
  if (role === "Admin") return true;
  if (!role) return false;
  return ROLE_PERMISSIONS[role]?.includes(featureKey);
}
