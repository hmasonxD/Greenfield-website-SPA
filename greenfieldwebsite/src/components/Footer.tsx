import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  ThemeProvider,
  IconButton,
  styled,
} from "@mui/material";
import logo from "../assets/logofooter.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link as RouterLink } from "react-router-dom";
import theme from "./Theme";

const SocialIconsBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleAddressClick = (address: string) => {
    const formattedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${formattedAddress}`);
  };

  return (
      <ThemeProvider theme={theme}>
        <Box
            component="footer"
            sx={{
              backgroundColor: "#247B27",
              color: "#fff",
              py: 3,
              mt: "auto",
            }}
        >
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <MuiLink
                    component={RouterLink}
                    to="/"
                    underline="none"
                    sx={{ color: "inherit", display: "block", mb: 2 }}
                    onClick={handleScrollToTop}
                >
                  <img
                      src={logo}
                      alt="Greenfield Technologies Inc."
                      style={{ maxWidth: 300 }}
                  />
                </MuiLink>
                <Typography variant="body2" sx={{ lineHeight: 1.6, textAlign: "left" }}>
                  Our Location <br/>
                  <MuiLink
                      href="#"
                      onClick={() => handleAddressClick("64-120 Magrath RD, Edmonton AB, T6R0C6")}
                      color="inherit"
                      underline="hover"
                      sx={{ cursor: "pointer" }}
                  >
                    Head Quarter - 64-120 Magrath RD, Edmonton AB, T6R0C6
                  </MuiLink>
                  <br />
                  <MuiLink
                      href="#"
                      onClick={() => handleAddressClick("1418 Osprey Dr #2 Hamilton, ON L9G 4V5")}
                      color="inherit"
                      underline="hover"
                      sx={{ cursor: "pointer" }}
                  >
                    Branch Address - 1418 Osprey Dr #2 Hamilton, ON L9G 4V5
                  </MuiLink>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                <SocialIconsBox>
                  <IconButton
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      size="medium"
                  >
                    <TwitterIcon fontSize="medium" />
                  </IconButton>
                  <IconButton
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      size="medium"
                  >
                    <LinkedInIcon fontSize="medium" />
                  </IconButton>
                  <IconButton
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      size="medium"
                  >
                    <InstagramIcon fontSize="medium" />
                  </IconButton>
                </SocialIconsBox>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "right" } }}>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  &copy; {new Date().getFullYear()} Greenfield International Technologies.
                  <br />
                  All rights reserved.
                </Typography>
                <Box>
                  <MuiLink
                      component={RouterLink}
                      to="/terms"
                      underline="none"
                      sx={{
                        color: "#fff",
                        mr: 2,
                      }}
                  >
                    Terms of Service
                  </MuiLink>
                  <MuiLink
                      component={RouterLink}
                      to="/privacy"
                      underline="none"
                      sx={{
                        color: "#fff",
                      }}
                  >
                    Privacy Policy
                  </MuiLink>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
  );
};

export default Footer;