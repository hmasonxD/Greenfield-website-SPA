import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import UpperNavigationBar from "./components/UpperNavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import PageTransition from './components/PageTransition';
// import ClientsPage from "./pages/Clients";

const App: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <UpperNavigationBar data-testid="upperNavBar" />
            <NavigationBar data-testid="navBar"/>
            <PageTransition>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <Admin />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </PageTransition>
            <Footer data-testid="footer" />
        </>
    );
};

export default App;