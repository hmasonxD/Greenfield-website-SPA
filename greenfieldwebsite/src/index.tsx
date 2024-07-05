import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./components/Theme";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-eisgadfzswlpdnzk.us.auth0.com"
        clientId="G290vYLqP7dBbRHwVohxXnHgMSpd9pFR"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);
