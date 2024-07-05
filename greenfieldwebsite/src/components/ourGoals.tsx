import React from "react";
import { Box, Grid, Typography, Button, Container, Fade } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";

interface ButtonCon {
    text: string;
    to: string;
}

interface OurGoalProps {
    title: string;
    goalDescription: string;
    image?: string;
    buttons?: ButtonCon[];
}

const AnimatedBox = styled("img")({
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
    },
});

const OurGoals: React.FC<OurGoalProps> = ({ title, goalDescription, image, buttons }) => {
    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#247B27" }}>
                {title}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 3,
                    borderRadius: 2,
                    width: "180px",
                    height: "4px",
                    backgroundColor: "#77B3DF",
                    mb: 3,
                }}
            ></Box>

            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                    <Box sx={{ pr: { xs: 0, md: 4 } }}>
                        <Typography variant="body2" sx={{ color: "black", width: "100%", maxWidth: "100%" }} paragraph>
                            {goalDescription}
                        </Typography>
                        {buttons && buttons.length > 0 && (
                            <Grid container spacing={2}>
                                {buttons.map((button, index) => (
                                    <Grid item key={index}>
                                        <Fade in timeout={500}>
                                            <Button
                                                component={RouterLink}
                                                to={button.to}
                                                variant="contained"
                                                color="primary"
                                                sx={{ borderRadius: 20, padding: "10px 20px" }}
                                            >
                                                {button.text}
                                            </Button>
                                        </Fade>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <AnimatedBox
                        src={image}
                        alt="Goals"
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            height: "auto",
                            maxHeight: 400,
                            borderRadius: 2,
                            boxShadow: 3,
                            mb: 2,
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.1)",
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurGoals;
