import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Project from "./pages/Project";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#4caf50",
      },
      secondary: {
        main: "#FFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
