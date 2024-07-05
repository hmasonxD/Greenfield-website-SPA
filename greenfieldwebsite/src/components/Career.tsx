import React, { useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    CardActions,
    Box,
} from '@mui/material';

interface CareerPageProps {
    jobs: { title: string; description: string }[];
}

const CareerPage: React.FC<CareerPageProps> = ({ jobs }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
              
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Search Jobs"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ width: '50%', marginBottom: 2 }}
                />
                <Grid container spacing={3} justifyContent="center">
                    {filteredJobs.map((job, index) => (
                        <Grid key={index} item xs={12} md={6}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {job.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {job.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Apply Now
                                    </Button>
                                    {/* Additional action buttons or links */}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default CareerPage;
