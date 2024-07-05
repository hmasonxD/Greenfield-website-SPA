import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Button, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Imageframe1 from "../assets/background.jpg";
import Imageframe2 from "../assets/goalsimg.jpg";
import Imageframe3 from "../assets/ourwork.jpg";
import { styled, keyframes } from "@mui/system";
import theme from "./Theme";

interface ButtonConfig {
    text: string;
    to: string;
}

interface SectionProps {
    title: string;
    subtitle: string;
    additionalContent?: string[];
    backgroundImage?: string;
    image?: string;
    buttons?: ButtonConfig[];
}

const slideInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%) scale(0.8);
    }
    100% {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
`;

const slideInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%) scale(0.8);
    }
    100% {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
`;

const AnimatedBox = styled(Box)<{ animationDirection?: "left" | "right"; }>`
    position: relative;
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: transform 0.5s cubic-bezier(.5, .01, .01, 1), opacity 0.5s cubic-bezier(.5, .01, .01, 1);
    opacity: 0;

    &.animate {
        opacity: 1;
        transform: translateX(0);
    }

    &.left-enter {
        animation: ${slideInLeft} 0.5s cubic-bezier(.5, .01, .01, 1) forwards;
    }

    &.right-enter {
        animation: ${slideInRight} 0.5s cubic-bezier(.8, .01, .01, 1) forwards;
    }
`;

const Section: React.FC<SectionProps> = ({
                                             title,
                                             subtitle,
                                             additionalContent,
                                             backgroundImage,
                                             image,
                                             buttons,
                                         }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const backgroundImages = [Imageframe1, Imageframe2, Imageframe3];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [backgroundImages.length]);

    const handlePrevImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent default behavior
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent default behavior
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % backgroundImages.length
        );
    };

    return (
        <AnimatedBox
            className={`animate ${currentImageIndex === 0 ? 'left-enter' : 'right-enter'}`}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages[currentImageIndex]})`,
                color: theme.palette.mode === "dark" ? "#D3D3D3" : "#333",
            }}
        >
            <IconButton
                onClick={handlePrevImage}
                sx={{
                    position: "absolute",
                    left: 20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.8)" },
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton
                onClick={handleNextImage}
                sx={{
                    position: "absolute",
                    right: 20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.8)" },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>

            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold",fontSize: '2.5rem',lineHeight: '3rem', color: "green", textShadow: '2px 2px 4px rgba(0,0,0,0.5)',textAlign: 'center' }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ fontSize: '1rem',lineHeight: '2rem',color: "#D3D3D3", textShadow: '1px 1px 2px rgba(0,0,0,0.5)',textAlign: 'left' }}>
                            {subtitle}
                        </Typography>

                        {additionalContent && (
                            <Box sx={{ textAlign: "left" }}>
                                {additionalContent.map((item, index) => (
                                    <Typography key={index} variant="caption" paragraph sx={{ color: "#D3D3D3", textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        )}

                        {buttons && buttons.length > 0 && (
                            <Box sx={{ marginTop: 4 }}>
                                {buttons.map((button, index) => (
                                    <Button
                                        key={index}
                                        component={RouterLink}
                                        to={button.to}
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            marginRight: 2,
                                            backgroundColor: theme.palette.secondary.main,
                                            "&:hover": { backgroundColor: theme.palette.primary.main },
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        {button.text}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {image && (
                            <img
                                src={image}
                                alt={title}
                                style={{ maxWidth: "100%", borderRadius: 8 }}
                            />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </AnimatedBox>
    );
};

export default Section;