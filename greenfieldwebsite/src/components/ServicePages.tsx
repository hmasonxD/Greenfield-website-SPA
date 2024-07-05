import React from "react";
import { Container, Typography } from "@mui/material";

interface Service {
    title: string;
    description: React.ReactNode;
    image: string;
    link: string;
}

interface ServicePagesProps {
    services: Service[];
}

const ServicePages: React.FC<ServicePagesProps> = ({ services }) => {
    return (
        <>
            {services.map((service, index) => (
                <Container key={index}>
                    <Typography variant="h4" gutterBottom color="#247B27" align="center">
                        {service.title}
                    </Typography>
                    {service.description}
                    <img src={service.image} alt={service.title} style={{ maxWidth: "100%" }} />
                    {/*<a href={service.link}>Learn More</a>*/}
                </Container>
            ))}
        </>
    );
};

export default ServicePages;
