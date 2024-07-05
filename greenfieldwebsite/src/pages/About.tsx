import React, { Fragment } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import GoalImage from "../assets/ourwork.jpg";
import OurGoal from "../components/ourGoals";
import Sponsor from "../components/ourSponsor";
import ContactSection from "../components/contactpage";
import EachFuc from "../components/Eachpage";
import Service from "../assets/goalsimg.jpg";

const AboutPage: React.FC = () => {
    return (
        <Fragment>
            {/* Section 1: Introduction */}
            <EachFuc Title="About Us" image={Service} />

            {/* Section 2: Our Goals */}
            <OurGoal
                title="Our Goals"
                image={GoalImage}
                goalDescription={`
          In order to excel in our industry, we must evolve as technology does, cultivating an environment of knowledge and growth. We aim to be a contractor that our clients can always rely on to meet or exceed their expectations. Safety, quality, and character are paramount to our ongoing success, and what we feel sets us apart.

          Additionally, the importance of a healthy work environment and interpersonal relationships cannot be understated. It is our belief that a small business is like a family, and employees should be treated in kind. Work should be as enjoyable and rewarding as it is challenging.

          We invite you to explore our website and learn more about who we are.
        `}
            />

            <Box sx={{ py: 4 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <img
                                src={GoalImage}
                                alt="Our Work"
                                style={{ width: "100%", borderRadius: 8 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom>
                                Mission
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Greenfield International Technologies, Inc. strives to be a
                                leading contractor in the ever-expanding IT/Telecommunications
                                industry. Since inception in 2020, our goal has been to produce
                                an outstanding product consistently and reliably in a timely
                                fashion, while keeping safety our chief concern.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Section 5: Sponsor and Contact Section */}
            <Sponsor />
            <ContactSection />
        </Fragment>
    );
};

export default AboutPage;
