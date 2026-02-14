import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MESSAGES = [
  { id: 1, from: "Amit Sharma", subject: "Welcome", preview: "Welcome to the app...", unread: true },
  { id: 2, from: "Neha Verma", subject: "Invoice update", preview: "Please review...", unread: false },
  { id: 3, from: "Rahul Singh", subject: "New feature", preview: "Check out the new feature...", unread: true },
  { id: 4, from: "Kapil Pathak", subject: "Report", preview: "Please review the report...", unread: false },
  { id: 5, from: "Mayank Tiwari", subject: "Re update", preview: "Please review the re update...", unread: true },
  { id: 6, from: "Saket Tiwari", subject: "New design", preview: "Check out the new design...", unread: false },
  { id: 7, from: "Siddharth Pathak", subject: "New feature", preview: "Check out the new feature...", unread: true },
  { id: 8, from: "Shivam Pathak", subject: "Report", preview: "Please review the report...", unread: false }
];

export default function InboxMessageList() {
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