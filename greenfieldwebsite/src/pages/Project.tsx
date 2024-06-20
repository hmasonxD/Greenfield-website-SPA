import React from "react";
import Section from "../components/Section";
import projectImage from "../assets/service.jpg";
import { Container } from "@mui/material";

const ProjectsPage: React.FC = () => {
  return (
    <Container>
      <Section
        title="Our Projects"
        subtitle="Explore some of the impactful projects executed by Greenfield International Technologies Inc."
        image={projectImage}
      />

      <Section
        title="Project Highlights"
        subtitle="Greenfield International Technologies Inc has successfully delivered projects in various sectors including:"
        additionalContent={[
          "Telecommunication Infrastructure Development",
          "Network Expansion and Optimization",
          "Technology Integration Solutions",
          "Client-specific Customizations",
        ]}
      />

      <Section
        title="Success Stories"
        subtitle="Read about our success stories and how we helped our clients achieve their business objectives."
        additionalContent={[
          "Case studies and testimonials from satisfied clients.",
          "Learn how our solutions have made a difference.",
          "Client success stories that showcase our expertise and commitment.",
        ]}
      />
    </Container>
  );
};

export default ProjectsPage;
