import React from "react";
import { Box, Typography } from "@mui/material";

interface EachPageProps {
  Title: string;
  image: string;
}

const EachPage: React.FC<EachPageProps> = ({ Title, image }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        marginBottom: 2,
      }}
    >
     <img
        src={image}
        alt={Title}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "30vh", // Adjusted height based on viewport height
          display: "block",
          maxWidth: "100%",
          objectFit:'cover',
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "Green",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {Title}
        </Typography>
      </Box>
    </Box>
  );
};

export default EachPage;
