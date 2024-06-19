import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import logo from "../assets/logo.jpg";
import "../index.scss";

const NavigationBar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand as={Link} to="/" className="ms-4">
          <img src={logo} alt="Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavDropdown
              title="Services"
              id="collasible-nav-dropdown"
              show={isServicesOpen}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/services">
                Tower Repair and Maintenance
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/careers">
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/clients">
              Clients
            </Nav.Link>
          </Nav>
          <Button
            variant="success"
            className="button-primary"
            onClick={handleShowModal}
          >
            Contact Us
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm handleClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavigationBar;
