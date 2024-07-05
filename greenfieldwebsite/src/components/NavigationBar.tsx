import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  Drawer,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../assets/logo.png";
import ContactButton from "./ContactButton";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface NavButtonProps {
  to: string;
  primary: string;
  hasDropdown?: boolean;
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  to,
  primary,
  hasDropdown,
  onMouseEnter,
}) => (
  <Button
    component={RouterLink}
    to={to}
    sx={{
      color: "#247B27",
      fontWeight: "bold",
      fontSize: "1rem",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#fffbf1",
        color: "black",
      },
    }}
    onMouseEnter={hasDropdown ? onMouseEnter : undefined}
    endIcon={hasDropdown ? <KeyboardArrowDownIcon /> : null}
  >
    {primary}
  </Button>
);

const NavigationBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();

  useEffect(() => {
      if (window) {
          window.scrollTo(0, 0); // Scroll to top on route change
      }
  }, [location.pathname]); // Trigger on pathname change

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

  const handleServicesHover = (event: React.MouseEvent<HTMLElement>): void => {
    if (!isMobile) {
      setServicesAnchorEl(event.currentTarget);
    }
  };

  const handleServicesClose = (): void => {
    setServicesAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#fff", color: "#247B27" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" component="div" sx={{ marginLeft: "10px" }}>
          <RouterLink to="/" className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              className="logo-img"
              style={{ maxWidth: 350 }}
            />
          </RouterLink>
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "1rem",
                  marginTop: "28px",
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <NavButtons onMouseEnter={handleServicesHover} />
                <ContactButton />
              </Box>
            </Drawer>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginRight: "20px",
            }}
          >
            <NavButtons onMouseEnter={handleServicesHover} />
            <ContactButton />
          </Box>
        )}
      </Toolbar>

      <Menu
        anchorEl={servicesAnchorEl}
        open={Boolean(servicesAnchorEl)}
        onClose={handleServicesClose}
        MenuListProps={{ onMouseLeave: handleServicesClose }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          component={RouterLink}
          to="/services"
          onClick={handleServicesClose}
          sx={{
            color: "#247B27",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(36, 123, 39, 0.08)",
            },
          }}
        >
          Tower Repair and Maintenance
        </MenuItem>
        {/* Add other menu items as needed */}
      </Menu>
    </AppBar>
  );
};

const NavButtons: React.FC<{
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ onMouseEnter }) => (
  <>
    <NavButton to="/" primary="Home" />
    <NavButton to="/about" primary="About" />
    <NavButton
      to="/services"
      primary="Services"
      hasDropdown
      onMouseEnter={onMouseEnter}
    />
    <NavButton to="/project" primary="Project" />
    <NavButton to="/careers" primary="Careers" />
  </>
);

export default NavigationBar;
