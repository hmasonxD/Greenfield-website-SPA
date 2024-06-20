import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

interface ButtonConfig {
  text: string;
  action: "contact" | "about" | "custom";
  onClick?: () => void;
}

interface SectionProps {
  title: string;
  subtitle: string;
  additionalContent?: string[];
  backgroundImage?: string;
  image?: string;
  buttons?: ButtonConfig[];
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  additionalContent,
  backgroundImage,
  image,
  buttons,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh", // section takes full viewport height for all devices
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: theme.palette.mode === "dark" ? "#fff" : "#333",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" paragraph>
              {subtitle}
            </Typography>
            {additionalContent && (
              <Box sx={{ textAlign: "left" }}>
                {additionalContent.map((item, index) => (
                  <Typography key={index} variant="body2" paragraph>
                    {item}
                  </Typography>
                ))}
              </Box>
            )}
            {buttons && buttons.length > 0 && (
              <Box sx={{ mt: 4 }}>
                {buttons.map((button, index) => (
                  <React.Fragment key={index}>
                    {button.action === "contact" && (
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        color="primary"
                        sx={{ mr: 2 }}
                      >
                        {button.text}
                      </Button>
                    )}
                    {button.action === "about" && (
                      <Button
                        component={Link}
                        to="/about"
                        variant="contained"
                        color="primary"
                        sx={{ mr: 2 }}
                      >
                        {button.text}
                      </Button>
                    )}
                    {button.action === "custom" && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={button.onClick}
                        sx={{ mr: 2 }}
                      >
                        {button.text}
                      </Button>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {image && (
              <img
                src={image}
                alt="Section Image"
                style={{ maxWidth: "100%", borderRadius: 8 }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
