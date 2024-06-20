import React from "react";
import Section from "../components/Section";
import clientImage from "../assets/client.jpg";
import { Container } from "@mui/material";

const ClientsPage: React.FC = () => {
  return (
    <Container>
      <Section
        title="Our Clients"
        subtitle="Discover some of the reputable clients who trust Greenfield International Technologies Inc for their Telecommunication needs."
        image={clientImage}
      />

      <Section
        title="Client Testimonials"
        subtitle="What our clients say about us:"
        additionalContent={[
          "Testimonials from satisfied clients.",
          "Hear directly from our clients about their experience with us.",
          "Client feedback that demonstrates our commitment to excellence.",
        ]}
      />

      <Section
        title="Partner With Us"
        subtitle="Partner with Greenfield International Technologies Inc for your Telecommunication projects."
        additionalContent={[
          "Join our esteemed clients who have benefited from our tailored solutions.",
          "Explore partnership opportunities with us.",
          "Contact us today to discuss how we can support your business needs.",
        ]}
        buttons={[{ text: "Contact Us", action: "contact" }]}
      />
    </Container>
  );
};

export default ClientsPage;
