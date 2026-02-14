import { useLocation } from "react-router-dom";
import { Alert } from "@mui/material";
import OutboxMessageList from "../features/inbox/OutboxMessageList";

export default function InboxLanding() {
  const location = useLocation();
  const showSuccess = location.state?.messageSent;

  return (
    <>
      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Message sent successfully.
        </Alert>
      )}

      <OutboxMessageList />
    </>
  );
}