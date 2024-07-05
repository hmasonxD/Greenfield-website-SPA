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
  open: boolean;
  handleClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ open, handleClose }) => {
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
    <Dialog open={open} onClose={handleClose}>
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
          <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
          >
            Submit
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="error"
            size="large"
          >
            Close
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ContactForm;
