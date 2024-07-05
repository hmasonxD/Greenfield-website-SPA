import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  ThemeProvider,
  CssBaseline,
  Box,
  Link,
  Fade,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import theme from "../components/Theme";
import emailjs from "emailjs-com";

const ContactPage: React.FC = () => {
  const handleSubmitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
        .sendForm(
            "GTI email",
            "template_0t2una8",
            event.currentTarget,
            "MXCE0iI2QeSouzJac"
        )
        .then(
            (result) => {
              console.log(result.text);
              alert("Message sent successfully!");
            },
            (error) => {
              console.log(error.text);
              alert("Failed to send message, please try again later.");
            }
        );
  };

  const handleAddressClick = (address: string) => {
    const formattedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${formattedAddress}`);
  };

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fade in={true} timeout={1000}>
          <Container maxWidth="lg" sx={{ py: 8, minHeight: "80vh" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#247B27", textAlign: "center", mb: 4 }}>
              Contact Us
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: "#247B27", fontWeight: "large" }}>
                      Send us a message
                    </Typography>
                    <form onSubmit={handleSubmitContactForm}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              fullWidth
                              id="firstName"
                              name="firstName"
                              label="First Name"
                              variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              fullWidth
                              id="lastName"
                              name="lastName"
                              label="Last Name"
                              variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              id="email"
                              name="email"
                              label="Your Email"
                              variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              multiline
                              rows={4}
                              id="message"
                              name="message"
                              label="Message"
                              variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                              type="submit"
                              variant="contained"
                              fullWidth
                              sx={{
                                backgroundColor: "#F0AD01",
                                "&:hover": { backgroundColor: "#d49b01" },
                              }}
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: "#247B27", fontWeight: "large" }}>
                      Our Locations
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: "#247B27", mb: 1 }}>Head Quarter</Typography>
                      <Link
                          component="button"
                          variant="body1"
                          onClick={() => handleAddressClick("64-120 Magrath RD, Edmonton AB, T6R0C6")}
                          sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.primary', textDecoration: 'none' }}
                      >
                        <LocationOnIcon sx={{ mr: 1, color: "#247B27" }} />
                        64-120 Magrath RD, Edmonton AB, T6R0C6
                      </Link>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: "#247B27", mb: 1 }}>Branch Office</Typography>
                      <Link
                          component="button"
                          variant="body1"
                          onClick={() => handleAddressClick("1418 Osprey Dr #2 Hamilton, ON L9G 4V5")}
                          sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.primary', textDecoration: 'none' }}
                      >
                        <LocationOnIcon sx={{ mr: 1, color: "#247B27" }} />
                        1418 Osprey Dr #2 Hamilton, ON L9G 4V5
                      </Link>
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ mr: 1, color: "#247B27" }} /> 780-607-0170
                      </Typography>
                      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <EmailIcon sx={{ mr: 1, color: "#247B27" }} /> info@greenfieldtech.com
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Fade>
      </ThemeProvider>
  );
};

export default ContactPage;