import { Box, Typography, Divider } from "@mui/material";

const ACTIVITY = [
  { text: "New user invited", time: "2 hours ago" },
  { text: "Document uploaded", time: "5 hours ago" },
  { text: "Message sent", time: "Yesterday" },
  { text: "Client record updated", time: "2 days ago" }
];

export default function RecentActivity() {
  return (
    <Box className="activity-wrapper">
      <Typography variant="h6" className="activity-title">
        Recent Activity
      </Typography>

      {ACTIVITY.map((item, index) => (
        <Box key={index}>
          <Box className="activity-row">
            <span className="activity-dot" />
            <Typography>{item.text}</Typography>
            <Typography className="activity-time">
              {item.time}
            </Typography>
          </Box>
          {index !== ACTIVITY.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );
}