export function getCurrentUserRole() {
  return sessionStorage.getItem("demo-role") || "Admin";
}
