import React, { useState } from "react";
import { Button } from "@mui/material";
import ContactForm from "../assets/ContactForm";

const ContactButton: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClose = () => setShowContactForm(false);
  const handleShow = () => setShowContactForm(true);

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={handleShow}
        sx={{
          minWidth: 0,
          padding: "6px 16px",
          margin: "0 8px",
          borderRadius: "8px",
          fontSize: "1rem",
          textTransform: "none",
          display: "inline-flex",
          flexShrink: 0,
          background: "#F0AD01",
          "&:hover": {
            backgroundColor: "#fffbf1",
            color: "black",
          },
        }}
      >
        Contact Us
      </Button>

      <ContactForm open={showContactForm} handleClose={handleClose} />
    </>
  );
};

export default ContactButton;
