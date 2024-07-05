import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  styled,
  Divider,
  useMediaQuery,
  Theme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LoginIcon from "@mui/icons-material/Login";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#247B27",
  color: "#fff",
  top: 0,
  zIndex: 1201,
  height: "44px",
  marginTop: "-12px",
  [theme.breakpoints.down("sm")]: {
    padding: "4px 8px",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: "30px",
  height: "44px",
  paddingLeft: "8px",
  paddingRight: "8px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  zIndex: 1200,
  [theme.breakpoints.down("sm")]: {
    padding: "4px 8px",
  },
}));

const SocialIconsBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const UpperNavigationBar: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("sm")
  );
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        appState: { returnTo: "/admin" },
      });
    } catch (error) {
      console.error("[UpperNavigationBar] Login error:", error);
    }
  };
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const buttonStyles = {
    color: "#fff",
    borderColor: "#fff",
    "&:hover": {
      borderColor: "#fff",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    padding: "4px 8px",
    minHeight: 0,
    lineHeight: "1.6",
    fontSize: isMobile ? "0.7rem" : "0.8rem",
    marginRight: "8px",
  };

  const iconButtonSize = isMobile ? "small" : "medium";

  return (
      <StyledAppBar position="relative">
        <StyledToolbar>
          { isAuthenticated ? (
              <Button
                  component={Link}
                  to="/admin"
                  variant="outlined"
                  size="small"
                  startIcon={<DashboardIcon />}
                  sx={buttonStyles}
              >
                Admin Dashboard
              </Button>
          ) : null}
          {isAuthenticated ? (
              <Button
                  variant="outlined"
                  size="small"
                  startIcon={<LogoutOutlinedIcon />}
                  onClick={handleLogout}
                  sx={buttonStyles}
              >
                Logout
              </Button>
          ) : (
              <Button
                  component="a"
                  variant="outlined"
                  size="small"
                  startIcon={<LoginIcon />}
                  onClick={handleLogin}
                  sx={buttonStyles}
              >
                Login
              </Button>
          )}
          <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "#fff", height: "44px", mx: 1 }}
          />
          <SocialIconsBox>
            <IconButton
                href="https://twitter.com/elonmusk"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                size={iconButtonSize}
            >
              <TwitterIcon fontSize={iconButtonSize} />
            </IconButton>
            <IconButton
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                size={iconButtonSize}
            >
              <LinkedInIcon fontSize={iconButtonSize} />
            </IconButton>
            <IconButton
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                size={iconButtonSize}
            >
              <InstagramIcon fontSize={iconButtonSize} />
            </IconButton>
          </SocialIconsBox>
        </StyledToolbar>
      </StyledAppBar>
  );
};

export default UpperNavigationBar;
