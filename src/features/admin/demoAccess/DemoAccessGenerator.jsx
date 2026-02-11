import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  TextField,
  Button,
  Alert,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";

import { addSession, cleanupExpired, removeSession } from "./demoAccessSlice";
import {
  generateGuid,
  buildUsername,
  buildPassword,
  buildDemoLink,
} from "./demoSessionService";

export default function DemoAccessGenerator() {
  const dispatch = useDispatch();
  const sessions = useSelector((s) => s.demoAccess.sessions);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    dispatch(cleanupExpired());
  }, [dispatch]);

  const handleGenerate = () => {
    if (!first || !last) return;

    const guid = generateGuid();
    const username = buildUsername(first, last);
    const password = buildPassword(first, last);
    const link = buildDemoLink(guid);

    dispatch(
      addSession({
        guid,
        username,
        password,
        link,
        createdAt: Date.now(),
        openCount: 0,
      })
    );

    setToast("Demo session generated successfully.");
  };

  const handleCopy = async (session) => {
    const resolvedLink = session.link || buildDemoLink(session.guid);
    const message = `Demo Access\nUsername: ${session.username}\nPassword: ${session.password}\nLink: ${resolvedLink}`;
    await navigator.clipboard.writeText(message);
    setToast("Copied demo credentials + link!");
  };

  const handleDelete = (guid) => {
    dispatch(removeSession(guid));
    setToast("Demo session deleted.");
  };

  return (
    <Box sx={{ p: 2, mb: 3, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Active Demo Sessions
      </Typography>

      {toast && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {toast}
        </Alert>
      )}

      {sessions.length === 0 ? (
        <Alert severity="info" sx={{ mb: 3 }}>
          No active demo sessions yet.
        </Alert>
      ) : (
        <Table sx={{ mb: 3 }}>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Session GUID</TableCell>
              <TableCell>Link</TableCell>
              <TableCell align="right">Copy</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((s) => {
              const resolvedLink = s.link || buildDemoLink(s.guid);

              return (
                <TableRow key={s.guid}>
                  <TableCell>{s.username}</TableCell>
                  <TableCell>{s.password}</TableCell>
                  <TableCell>{s.guid}</TableCell>
                  <TableCell>
                    <a href={resolvedLink} target="_blank" rel="noreferrer">
                      {resolvedLink}
                    </a>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Copy credentials + link">
                      <IconButton onClick={() => handleCopy(s)}>
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Delete session">
                      <IconButton onClick={() => handleDelete(s.guid)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}

      <Typography variant="h6" sx={{ mb: 2 }}>
        Demo Session Generator (Admin)
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="First Name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <TextField
          label="Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <Button variant="contained" onClick={handleGenerate}>
          Generate
        </Button>
      </Box>
    </Box>
  );
}
