import React from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

interface ContactFormProps {
  handleClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ handleClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        event.currentTarget,
        "YOUR_USER_ID"
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
    <Form onSubmit={handleSubmit} className="d-flex flex-column">
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>

      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required />
      </Form.Group>

      <Form.Group controlId="formMessage" className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter your message"
          required
        />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
        <Button variant="secondary" onClick={handleClose} size="lg">
          Close
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
