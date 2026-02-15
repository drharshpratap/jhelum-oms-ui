import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Alert,
  IconButton,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";

import { removeSession } from "./demoAccess/demoAccessSlice";
import { buildDemoLink } from "./demoAccess/demoSessionService";

export default function AdminLanding() {
  const location = useLocation();
  const dispatch = useDispatch();

  const showSuccess = location.state?.inviteSuccess;

  const sessions = useSelector((s) => s.demoAccess.sessions);

  const handleCopy = async (session) => {
    const resolvedLink = session.link || buildDemoLink(session.guid);

    const message = `User Access\nRole: ${session.role}\nUsername: ${session.username}\nPassword: ${session.password}\nLink: ${resolvedLink}`;

    await navigator.clipboard.writeText(message);
  };

  const handleDelete = (guid) => {
    dispatch(removeSession(guid));
  };

  return (
    <Box>
      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Invitation sent successfully.
        </Alert>
      )}

      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Users Overview
      </Typography>

      {sessions.length === 0 ? (
        <Alert severity="info">
          No invited users yet. Use “Invite Users” to create one.
        </Alert>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Session Link</TableCell>
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

                  <TableCell>
                    <Chip
                      label={s.role}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        background: "rgba(47,87,143,0.12)",
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <a href={resolvedLink} target="_blank" rel="noreferrer">
                      Open Session
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
                    <Tooltip title="Delete user">
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
    </Box>
  );
}
