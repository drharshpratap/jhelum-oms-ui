import { Box, Typography } from "@mui/material";
import "../styles/moduleHeader.css";

export default function ModuleHeader({ title, subtitle, actions }) {
  return (
    <Box className="peb-module-header">
      <Box>
        <Typography className="peb-module-title">
          {title}
        </Typography>

        {subtitle && (
          <Typography className="peb-module-subtitle">
            {subtitle}
          </Typography>
        )}
      </Box>

      {actions && (
        <Box className="peb-module-actions">
          {actions}
        </Box>
      )}
    </Box>
  );
}
