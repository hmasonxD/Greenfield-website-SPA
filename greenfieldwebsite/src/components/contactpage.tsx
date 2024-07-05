import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Link as RouterLink } from "react-router-dom";

const ContactSection: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "#e1f5fe", py: 4 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#1976d2" }}
                >
                    Our Satisfaction is Your Guarantee
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }} paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<PhoneIcon />}
                            href="tel:780-607-0170"
                            sx={{
                                minWidth: 0,
                                padding: "6px 16px",
                                margin: "0 8px",
                                borderRadius: "8px",
                                fontSize: "1rem",
                                textTransform: "none",
                                display: "inline-flex",
                                flexShrink: 0,
                                background: "#F0AD01",
                                "&:hover": {
                                    backgroundColor: "#fffbf1",
                                    color: "black",
                                },
                            }}
                        >
                            780-607-0170
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={RouterLink}
                            to="/contact"
                            variant="contained"
                            color="primary"
                            startIcon={<EmailIcon />}
                            sx={{
                                minWidth: 0,
                                padding: "6px 16px",
                                margin: "0 8px",
                                borderRadius: "8px",
                                fontSize: "1rem",
                                textTransform: "none",
                                display: "inline-flex",
                                flexShrink: 0,
                                background: "#247B27",
                                "&:hover": {
                                    backgroundColor: "#1e6f21",
                                },
                            }}
                        >
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactSection;