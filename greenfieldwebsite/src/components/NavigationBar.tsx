import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Modal,
  Button,
  ListItemIcon,
  Switch,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import BusinessIcon from "@mui/icons-material/Business";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../assets/logo.jpg";
import ContactForm from "../components/ContactForm";

interface NavigationBarProps {
  toggleTheme: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent): void => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleShowModal = (): void => {
    setShowModal(true);
    setDrawerOpen(false); // Close drawer if it's open
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#4caf50",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <RouterLink
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ maxWidth: 150, marginRight: 10 }}
              />
              Greenfield International Technologies
            </RouterLink>
          </Typography>

          {!isMobile && (
            <List sx={{ display: "flex", marginLeft: "auto" }}>
              <ListItem button component={RouterLink} to="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={RouterLink} to="/about">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component={RouterLink} to="/careers">
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Careers" />
              </ListItem>
              <ListItem button component={RouterLink} to="/projects">
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem button component={RouterLink} to="/clients">
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Clients" />
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleShowModal}
                  startIcon={<ContactMailIcon />}
                >
                  Contact Us
                </Button>
              </ListItem>
              <ListItem>
                <Switch
                  checked={theme.palette.mode === "dark"}
                  onChange={toggleTheme} // Toggle theme function passed as prop
                  color="default"
                  icon={<Brightness4Icon />}
                  checkedIcon={<Brightness7Icon />}
                />
              </ListItem>
            </List>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: 250 }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "100%", padding: "1rem", cursor: "pointer" }}
          />
          <List>
            <ListItem button component={RouterLink} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={RouterLink} to="/about">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={RouterLink} to="/careers">
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Careers" />
            </ListItem>
            <ListItem button component={RouterLink} to="/projects">
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button component={RouterLink} to="/clients">
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItem>
            <ListItem button onClick={handleShowModal}>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem>
              <Switch
                checked={theme.palette.mode === "dark"}
                onChange={toggleTheme}
                color="default"
                icon={<Brightness4Icon />}
                checkedIcon={<Brightness7Icon />}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>

      <Modal open={showModal} onClose={handleCloseModal}>
        <div className="modal-container">
          <ContactForm handleClose={handleCloseModal} />
        </div>
      </Modal>
    </>
  );
};

export default NavigationBar;
