import React, { useState } from "react";
import { Button, Dialog, DialogTitle } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const ContactButton: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClose = () => setShowContactForm(false);
  const handleShow = () => setShowContactForm(true);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleShow}
        startIcon={<ContactMailIcon />}
      >
        Contact Us
      </Button>

      <Dialog open={showContactForm} onClose={handleClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <ContactForm handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default ContactButton;
