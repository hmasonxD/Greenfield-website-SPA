import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Container,
  CssBaseline,
  Typography,
  Box,
  Paper,
  Avatar,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import theme from "../components/Theme";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, error } =
      useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("[Login] isAuthenticated:", isAuthenticated);
    console.log("[Login] isLoading:", isLoading);
    console.log("[Login] error:", error);
    console.log("[Login] Current location:", window.location.pathname);

    if (isAuthenticated && !isLoading) {
      console.log("[Login] Navigating to /admin");
      navigate("/admin");
    }
  }, [isAuthenticated, isLoading, navigate, error]);

  const handleLogin = async () => {
    console.log("[Login] Initiating login process");
    try {
      await loginWithRedirect({
        authorizationParams: {
          redirect_uri: `${window.location.origin}/admin`,
        },
      });
    } catch (error) {
      console.error("[Login] Login error:", error);
    }
  };

  const handleLogout = () => {
    console.log("[Login] Initiating logout process");
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper elevation={6} sx={{ padding: 4, marginTop: 8 }}>
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
            >
              <Avatar sx={{ m: 1, backgroundColor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              {isAuthenticated ? (
                  <Button
                      onClick={handleLogout}
                      color="inherit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                    Log Out
                  </Button>
              ) : (
                  <Button
                      onClick={handleLogin}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      color="primary"
                  >
                    Sign In
                  </Button>
              )}
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
  );
};

export default Login;