import React from "react";
import Section from "../components/Section";
import backgroundImage from "../assets/about.jpg";
import { Container } from "@mui/material";

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Section
        title="About Greenfield International Technologies"
        subtitle="Greenfield International Technologies Inc offers a helping hand to firms seeking experience and competency from an IT/Telecommunication Company. We provide services and support in the Telecommunication space, which is becoming increasingly competitive every day."
        backgroundImage={backgroundImage}
        buttons={[{ text: "Contact Us", action: "contact" }]}
      />

      <Section
        title="Our Mission"
        subtitle="To deliver cutting-edge solutions in Telecommunication that exceed our clients’ expectations and contribute to their success."
        additionalContent={[
          "At Greenfield International Technologies Inc, we pride ourselves on delivering high-quality and innovative solutions tailored to our clients’ specific needs.",
          "We are committed to providing exceptional service and ensuring client satisfaction through our expertise in Telecommunication technologies.",
        ]}
      />

      <Section
        title="Our Values"
        subtitle="At Greenfield International Technologies Inc, we uphold the following core values:"
        additionalContent={[
          "Innovation: Continuously striving to innovate and deliver pioneering solutions.",
          "Integrity: Acting with honesty, transparency, and respect in all interactions.",
          "Excellence: Achieving the highest standards of quality and performance in everything we do.",
          "Customer Focus: Putting our clients’ needs at the forefront of our priorities.",
        ]}
      />

      <Section
        title="Why Choose Us?"
        subtitle="Partner with Greenfield International Technologies Inc for the following reasons:"
        additionalContent={[
          "Expertise: We possess deep industry knowledge and technical expertise in Telecommunication solutions.",
          "Customization: Tailored solutions designed to meet your unique business requirements.",
          "Support: Dedicated support and maintenance services to ensure seamless operation.",
          "Innovation: Embracing the latest technologies to drive your business forward.",
        ]}
        buttons={[{ text: "Explore Careers", action: "about" }]}
      />
    </Container>
  );
};

export default AboutPage;
