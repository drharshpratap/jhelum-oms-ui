
import { useLocation } from "react-router-dom";
import DocumentHub from "./components/DocumentHub";

const documents = [
  { id: 1, name: "Invoice_Q1.pdf", type: "PDF", status: "Uploaded" },
  { id: 2, name: "Contract.docx", type: "Word", status: "Pending" },
  { id: 3, name: "Report.xlsx", type: "Excel", status: "Approved" },
];

export default function DocumentList() {
  const location = useLocation();
  const successMessage = location.state?.successMessage;

  return (
    <>
      
      <DocumentHub/>
    </>
  );
}
