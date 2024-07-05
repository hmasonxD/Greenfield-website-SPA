import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

// Define props interface for the component
interface ProjectPageProps {
    title: string;
    description: string;
    imageUrl: string;
    imagePosition?: 'left' | 'right'; // Allow user to specify image position
}

const ProjectPage: React.FC<ProjectPageProps> = ({
    title,
    description,
    imageUrl,
    imagePosition = 'left', // Default image position is left
}) => {
    return (
        <Card sx={{ marginBottom: 5, background: 'transparent', boxShadow: 'none' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={`${title} image`}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: 30,
                        marginTop: 20, // Adjust spacing for mobile view
                        marginBottom: 20, // Adjust spacing for mobile view
                    }}
                />
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant="h5" component="div" color="green" fontWeight="bold" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" paragraph>
                        {description}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default ProjectPage;
