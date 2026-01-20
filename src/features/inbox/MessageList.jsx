import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MESSAGES = [
  { id: 1, from: "Amit Sharma", subject: "Welcome", preview: "Welcome to the app...", unread: true },
  { id: 2, from: "Neha Verma", subject: "Invoice update", preview: "Please review...", unread: false }
];

export default function MessageList() {
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