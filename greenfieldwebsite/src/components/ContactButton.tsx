import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ContactForm from "./ContactForm";

const ContactButton: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClose = () => setShowContactForm(false);
  const handleShow = () => setShowContactForm(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>

      <Modal show={showContactForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactButton;
