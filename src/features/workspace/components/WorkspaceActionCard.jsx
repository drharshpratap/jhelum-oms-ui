import { Box, Button, Typography } from "@mui/material";

export default function WorkspaceActionCard({
  title,
  description,
  buttonLabel,
  onClick,
  disabled,
  variant,
}) {
  return (
    <Box className={`peb-actionCard peb-actionCard-${variant}`}>
      <Typography className="peb-actionCardTitle">{title}</Typography>

      <Typography className="peb-actionCardDesc">
        {description}
      </Typography>

      <Button
        className="peb-actionCardBtn"
        onClick={onClick}
        disabled={disabled}
      >
        {buttonLabel} →
      </Button>
    </Box>
  );
}
