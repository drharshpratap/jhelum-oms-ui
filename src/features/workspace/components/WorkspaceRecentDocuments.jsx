import { Box, Typography } from "@mui/material";

export default function WorkspaceRecentDocuments({ documents }) {
  return (
    <Box className="peb-docPreview">
      <Typography className="peb-subTitle">
        Recent Documents
      </Typography>

      <Box className="peb-docList">
        {documents.map((doc) => (
          <Box key={doc.id} className="peb-docRow">
            <Typography className="peb-docName">{doc.name}</Typography>
            <Typography className="peb-docStatus">{doc.status}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
