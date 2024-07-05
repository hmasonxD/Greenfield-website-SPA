import React from "react";
import { Typography, Container } from "@mui/material";
import Sponsor from "../components/ourSponsor";
import ContactSection from "../components/contactpage";
import Page from "../assets/goalsimg.jpg";
import ServicePages from "../components/ServicePages";
import logo from "../assets/footer.png";



const Services: React.FC = () => {
    const services = [
        {
            title: "Telecommunications Services",
            description: (
                <>
                    <Typography variant="body2" paragraph>
                        At Greenfield International Technologies Inc., we specialize in providing advanced telecommunications solutions tailored to meet the unique needs of modern businesses. Our comprehensive services include:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body2" paragraph>
                                Fiber optic network installation and maintenance
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" paragraph>
                                Satellite communication systems integration
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" paragraph>
                                Wireless network design and deployment
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" paragraph>
                                VoIP and unified communications solutions
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" paragraph>
                                Telecommunication infrastructure upgrades and optimization
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant="body2" paragraph>
                        Whether you're looking to enhance connectivity, improve efficiency, or scale your telecommunications infrastructure, Greenfield is your trusted partner for innovative and reliable solutions.
                    </Typography>
                </>
            ),
            image: Page, // Ensure correct image path
            link: "/contact",
        },
        {
            title: "Tower Repair and Maintenance",
            description: (
                <>
                    <Typography variant="body2" paragraph>
                        At Greenfield International Technologies Inc., we know that a fully functional tower is the key to good business. Our repair and maintenance services keep you up and running – from anchor replacement to storm damage repairs, we’re always prepared for the unexpected.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We specialize in catching problems before they start. With structural analysis and upgrades, foundation inspection, and grounding replacement, our tower maintenance services can help you avoid bigger repairs down the line.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We’re happy to work with guyed, monopole, rotating, and self-supporting towers, and adhere to a
                        range of strict industry standards. Greenfield also offers around-the-clock emergency service,
                        so you’ll never have to go it alone. <br/><br/> To inquire about our construction, repair, and
                        maintenance services, contact us @ +1 438-923-9517.
                    </Typography>
                </>
            ),
            image: logo, // Ensure correct image path
            link: "/contact",
        },
    ];

    return (
        <>
            <Container sx={{ paddingTop: "2rem" }}>
                <ServicePages services={services} />
            </Container>
        <Sponsor/>
        <ContactSection/>
</>
    );
};

export default Services;