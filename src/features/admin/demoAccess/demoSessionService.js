export function generateGuid() {
  return crypto.randomUUID();
}

export function buildUsername(first, last) {
  return `${first.toLowerCase()}.${last.toLowerCase()}`;
}

export function buildPassword(first, last) {
  return `${first}${last}1234`;
}

export function buildDemoLink(guid) {
  const baseUrl = process.env.REACT_APP_PUBLIC_BASE_URL || window.location.origin;
  return `${baseUrl}/?demoSession=${guid}`;
}

export function isExpired(session) {
  const now = Date.now();
  const maxAge = 3 * 24 * 60 * 60 * 1000;
  if (now - session.createdAt > maxAge) return true;
  if (session.openCount >= 1000) return true;
  return false;
}
