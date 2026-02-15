import { Box, Typography } from "@mui/material";

export default function WorkspaceHeroBanner() {
  return (
    <Box className="peb-workspaceHero">
      <Typography className="peb-workspaceHeroTitle">
        Welcome to your Workspace
      </Typography>

      <Typography className="peb-workspaceHeroSubtitle">
        Everything you need to move tasks, documents, and reviews forward — in one place.
      </Typography>
    </Box>
  );
}
