import React from "react";
import Section from "../components/Section";
import backgroundImage from "../assets/background.jpg";
import professionalServicesImage from "../assets/service.jpg";

const Homepage: React.FC = () => {
  return (
    <>
      <Section
        title="Greenfield International Technologies"
        subtitle="We offer a helping hand to firms who are looking for experience and competency from an IT/Telecommunication Company. Greenfield International Technologies Inc provides service and support in Telecommunication space that is becoming more crowded every day with competition."
        backgroundImage={backgroundImage}
        buttons={[{ text: "Contact Us", action: "contact" }]}
      />

      <Section
        title="Professional Services"
        subtitle="Greenfield International Technologies Inc is a full-service systems integrator with partnerships with a wide variety of technology manufacturers and providers. Proposals are custom designed to match your company’s project needs."
        additionalContent={[
          "Greenfield International Technologies Inc consults and provides custom solutions as well as implementation services.",
          "Greenfield International’s Professional Services Highlights:",
          "Telecommunications Services.",
          "Uplifts",
          "Antenna and Radios Installation",
          "Cell Site Installation & Commissioning",
          "Microwave installation",
          "2 to 4 hours of Emergency Service Response times—or customizable",
          "Non-Emergency Response – Next Business Day",
          "Time & Materials Options",
        ]}
        image={professionalServicesImage}
        buttons={[{ text: "About Us", action: "about" }]}
      />
    </>
  );
};

export default Homepage;
