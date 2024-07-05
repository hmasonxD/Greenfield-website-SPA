import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        prompt: "login",
        redirect_uri: `${window.location.origin}/admin`,
      },
    });
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  if (isAuthenticated) {
    return (
      <Button onClick={handleLogout} color="inherit">
        Log Out
      </Button>
    );
  }

  return (
    <Button onClick={handleLogin} color="inherit">
      Log In
    </Button>
  );
};

export default LoginButton;
