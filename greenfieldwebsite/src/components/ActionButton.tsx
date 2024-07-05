import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

interface ActionButtonProps {
  actionType: "login" | "contact";
  onSubmitContactForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  actionType,
  onSubmitContactForm,
}) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        authorizationParams: {
          prompt: "login",
          redirect_uri: `${window.location.origin}/admin`,
        },
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };


  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } })
        .then(() => {
          // Redirect to main page after successful logout
          window.location.href = '/';
        })
        .catch((error) => {
          console.error('Logout failed:', error);
        });
  };

  return (
    <>
      {actionType === "login" && (
        <Button
          onClick={isAuthenticated ? handleLogout : handleLogin}
          color="inherit"
          role="button"
        >
          {isAuthenticated ? "Log Out" : "Log In"}
        </Button>
      )}

      {actionType === "contact" && (
        <>
          <Button
            variant="contained"
            color="success"
            role="button"
            onClick={handleOpenForm}
            sx={{
              minWidth: 0,
              padding: "6px 16px",
              margin: "0 8px",
              borderRadius: "8px",
              fontSize: "1rem",
              textTransform: "none",
              display: "inline-flex",
              flexShrink: 0,
              background: "#F0AD01",
              "&:hover": {
                backgroundColor: "#fffbf1",
                color: "black",
              },
            }}
          >
            Contact Us
          </Button>
          <Dialog open={showForm} onClose={handleCloseForm}>
            <DialogTitle>Contact Us</DialogTitle>
            <form onSubmit={onSubmitContactForm}>
              <DialogContent>
                <DialogContentText>
                  Please fill out the form below to send us a message.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Your Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  margin="dense"
                  id="message"
                  label="Message"
                  type="text"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </DialogContent>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  size="large"
                >
                  Submit
                </Button>
                <Button
                  onClick={handleCloseForm}
                  variant="contained"
                  color="error"
                  size="large"
                >
                  Close
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </>
      )}
    </>
  );
};

export default ActionButton;
