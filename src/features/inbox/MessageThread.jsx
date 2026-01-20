import { Stack, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function MessageThread() {
  const { id } = useParams();

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Conversation #{id}</Typography>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">User: Hello, welcome!</Typography>
      </Paper>

      <Paper sx={{ p: 2, alignSelf: "flex-end", backgroundColor: "#e3f2fd" }}>
        <Typography variant="body2">You: Thanks!</Typography>
      </Paper>
    </Stack>
  );
}