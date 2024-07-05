import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const hoverStyle = {
  transform: "translateY(-2px)",
  boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
  transition: "all 0.3s ease",
};

let theme = createTheme({
  palette: {
    primary: {
      main: "#247B27",
      light: "#4CAF50",
      dark: "#1B5E20",
    },
    secondary: {
      main: "#F0AD01",
      light: "#FFD54F",
      dark: "#FFA000",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "'Source Sans Pro', 'Roboto', 'Arial', sans-serif",
    fontSize: 18,
    h1: {
      fontWeight: 700,
      fontSize: "4rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01071em",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "0.02857em",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body, #root {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        body {
          font-size: 16px;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "10px 24px",
          transition: "all 0.3s ease",
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          "&:hover": hoverStyle,
        },
        outlined: {
          "&:hover": {
            backgroundColor: "rgba(36, 123, 39, 0.04)",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#247B27",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1B5E20",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            backgroundColor: "#F0AD01",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#FFA000",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 12px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            transition: "all 0.3s ease",
            "&:hover": {
              "& > fieldset": {
                borderColor: "#247B27",
              },
            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#1B5E20",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  factor: 2,
});

export default theme;