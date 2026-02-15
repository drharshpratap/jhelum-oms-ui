import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@mui/material";
import { setFeatureFlag } from "./featureFlagsSlice";

export default function FeatureFlags() {
  const dispatch = useDispatch();
  const featureFlags = useSelector(
    state => state.admin.featureFlags
  );

  const renderFeatureCard = (label, key) => (
    <Card className="feature-flag-card">
      <CardContent className="feature-flag-card__content">
        <Box className="feature-flag-card__text">
          <Typography variant="h6">
            {label}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Control visibility of the {label.toLowerCase()} module
          </Typography>
        </Box>

        <RadioGroup
          row
          value={featureFlags[key] ? "enabled" : "disabled"}
          onChange={(_, value) =>
            dispatch(
              setFeatureFlag({
                feature: key,
                value: value === "enabled"
              })
            )
          }
          className="feature-flag-card__controls"
        >
          <FormControlLabel
            value="enabled"
            control={<Radio />}
            label="Enabled"
          />
          <FormControlLabel
            value="disabled"
            control={<Radio />}
            label="Disabled"
          />
        </RadioGroup>
      </CardContent>
    </Card>
  );

  return (
    <Box className="feature-flags-page">
      <Box className="feature-flags-page__header">
        <Typography variant="h4">
          Feature Flags
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          Enable or disable application modules in real time.
        </Typography>
      </Box>

      <Box className="feature-flags-page__list">
        {renderFeatureCard("Customers", "clients")}
        {renderFeatureCard("Workspace", "workspace")}
        {renderFeatureCard("Documents", "documents")}
        {renderFeatureCard("Inbox", "inbox")}
      </Box>
    </Box>
  );
}
