import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MESSAGES = [
  { id: 1, from: "Mayank Tiwari", subject: "Report", preview: "Welcome to the app...", unread: true },
  { id: 2, from: "Kapil Pathak", subject: "Re update", preview: "Please review...", unread: false },
  { id: 4, from: "Kapil Pathak", subject: "Report", preview: "Please review the report...", unread: false },
  { id: 5, from: "Mayank Tiwari", subject: "Re update", preview: "Please review the re update...", unread: true },
  { id: 6, from: "Saket Tiwari", subject: "New design", preview: "Check out the new design...", unread: false }
  
];

export default function DraftMessageList() {
  const navigate = useNavigate();

  return (
    <List>
      {MESSAGES.map((msg) => (
        <div key={msg.id}>
          <ListItem button onClick={() => navigate(`/inbox/message/${msg.id}`)}>
            <ListItemText
              primary={
                <Typography fontWeight={msg.unread ? "bold" : "normal"}>
                  {msg.from} — {msg.subject}
                </Typography>
              }
              secondary={msg.preview}
            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
}