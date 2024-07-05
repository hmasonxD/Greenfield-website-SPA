import React, { useState, useEffect, useCallback } from "react";
import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

interface User {
  user_id: string;
  email: string;
  app_metadata?: {
    role: string;
  };
}

const API_URL = "https://dev-eisgadfzswlpdnzk.us.auth0.com/api/v2/users";

const Admin: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUser, setNewUser] = useState({ email: "", password: "", role: "" });

  const fetchUsers = useCallback(async (token: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setError("Received unexpected data format from the server.");
        setUsers([]);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to fetch users. Please try again later.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently();
        await fetchUsers(token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchData();
  }, [getAccessTokenSilently, fetchUsers]);

  const handleCreateUser = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newUser.email,
          password: newUser.password,
          connection: "Username-Password-Authentication",
          app_metadata: { role: newUser.role },
        }),
      });

      if (response.ok) {
        setOpenDialog(false);
        fetchUsers(token); // Refresh the user list after creating a new user
        setNewUser({ email: "", password: "", role: "" });
      } else {
        setError("Failed to create user. Please try again.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      setError("An error occurred while creating the user.");
    }
  };

  return (
      <Box sx={{ padding: 3 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome, {user?.name}! This is the admin area.
          </Typography>

          <Box sx={{ marginTop: 4 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h5" gutterBottom>
                  Users and Roles
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
                  Create User
                </Button>
              </Grid>
            </Grid>

            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                          <TableRow key={user.user_id}>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.app_metadata?.role || "N/A"}</TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            )}
          </Box>

          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Create New User</DialogTitle>
            <DialogContent>
              <TextField
                  autoFocus
                  margin="dense"
                  label="Email"
                  type="email"
                  fullWidth
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
              <TextField
                  margin="dense"
                  label="Password"
                  type="password"
                  fullWidth
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
              <TextField
                  margin="dense"
                  label="Role"
                  fullWidth
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
              <Button onClick={handleCreateUser}>Create</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </Box>
  );
};

export default Admin;