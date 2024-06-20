import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Link as MuiLink,
  useTheme,
} from "@mui/material";
import logo from "../assets/logo.jpg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink from react-router-dom

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#333" : "#4caf50",
        color: theme.palette.mode === "dark" ? "#fff" : "#333",
        py: 3,
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <MuiLink
              href="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={logo}
                alt="Greenfield Technologies Inc."
                style={{ maxWidth: 150, marginBottom: 10 }}
              />
            </MuiLink>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              <div>OUR LOCATION</div>
              <div>Head Quarter - 64-120 Magrath RD, Edmonton AB, T6R0C6</div>
              <div>Branch Address - 1418 Osprey Dr #2 Hamilton, ON L9G 4V5</div>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <MuiLink
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" style={{ width: 30 }} />
              </MuiLink>
              <MuiLink
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  style={{ width: 30 }}
                />
              </MuiLink>
              <MuiLink
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" style={{ width: 30 }} />
              </MuiLink>
              <MuiLink
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" style={{ width: 30 }} />
              </MuiLink>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "right" } }}
          >
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              &copy; {new Date().getFullYear()} Greenfield International
              Technologies. All rights reserved.
            </Typography>
            <Box>
              <MuiLink
                component={RouterLink} // Use RouterLink here
                to="/terms"
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  textDecoration: "none",
                  mr: 2,
                }}
              >
                Terms of Service
              </MuiLink>
              <MuiLink
                component={RouterLink} // Use RouterLink here
                to="/privacy"
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
