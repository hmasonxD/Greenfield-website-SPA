import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactButton from "./ContactButton";
import "../index.scss";

interface ButtonConfig {
  text: string;
  action: "contact" | "about" | "custom";
  onClick?: () => void;
}

interface SectionProps {
  title: string;
  subtitle: string;
  additionalContent?: string[];
  backgroundImage?: string;
  image?: string;
  buttons?: ButtonConfig[];
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  additionalContent,
  backgroundImage,
  image,
  buttons,
}) => {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section-content">
              <h2>{title}</h2>
              <p>{subtitle}</p>
              {additionalContent && (
                <ul>
                  {additionalContent.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {buttons && buttons.length > 0 && (
                <div className="button-container">
                  {buttons.map((button, index) => (
                    <React.Fragment key={index}>
                      {button.action === "contact" && <ContactButton />}
                      {button.action === "about" && (
                        <Link to="/about">
                          <Button
                            variant="success"
                            className="button-primary btn-lg"
                          >
                            {button.text}
                          </Button>
                        </Link>
                      )}
                      {button.action === "custom" && (
                        <Button
                          variant="primary"
                          className="custom-button btn-lg"
                          onClick={button.onClick}
                        >
                          {button.text}
                        </Button>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </Col>
          <Col lg={6}>
            {image && (
              <img src={image} alt="Section Image" className="img-fluid" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;
