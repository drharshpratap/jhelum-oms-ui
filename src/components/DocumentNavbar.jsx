
import { Link } from "react-router-dom";

export default function DocumentNavbar() {
  return (
    <nav style={{
      background: "#f1f5f9",
      padding: "12px 32px",
      display: "flex",
      gap: "20px",
      borderBottom: "1px solid #ccc"
    }}>
      <Link to="/documents">Documents</Link>
      <Link to="/documents/add">Upload Document</Link>
    </nav>
  );
}
