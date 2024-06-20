import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import emailjs from "emailjs-com";

interface ContactFormProps {
  handleClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ handleClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "GTI email",
        "template_0t2una8",
        event.currentTarget,
        "MXCE0iI2QeSouzJac"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          handleClose();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Contact Us</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below to send us a message.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Close
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ContactForm;
