import React from "react";
import Section from "../components/Section";
import backgroundImage from "../assets/test.jpg";
import { Container } from "@mui/material";

const CareersPage: React.FC = () => {
  return (
    <Container>
      <Section
        title="Join Our Team"
        subtitle="Discover exciting career opportunities at Greenfield International Technologies Inc."
        backgroundImage={backgroundImage}
        buttons={[
          {
            text: "Apply Now",
            action: "custom",
            onClick: () => alert("Redirect to careers page"),
          },
        ]}
      />

      <Section
        title="Why Work With Us?"
        subtitle="At Greenfield International Technologies Inc, we offer:"
        additionalContent={[
          "Professional Growth: Opportunities to develop skills and advance your career.",
          "Innovative Environment: Work with cutting-edge technologies and solutions.",
          "Team Collaboration: Collaborative work culture that fosters creativity and teamwork.",
          "Rewarding Experience: Competitive compensation and benefits package.",
        ]}
      />

      <Section
        title="Current Openings"
        subtitle="Explore our current job openings and join our dynamic team."
        additionalContent={[
          "We are constantly seeking talented individuals to join our team.",
          "Check our careers page regularly for updated job postings.",
          "Apply today and start a rewarding career at Greenfield International Technologies Inc.",
        ]}
        buttons={[{ text: "View Openings", action: "about" }]}
      />
    </Container>
  );
};

export default CareersPage;
