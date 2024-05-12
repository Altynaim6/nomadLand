import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutPage = () => {
    return (
        <Container component="main" maxWidth="md">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    About NomadLand
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    NomadLand is a premier travel agency dedicated to offering unique, 
                    curated travel experiences across Kyrgyzstan. From the vast, rolling 
                    steppes to the majestic peaks of the Tien Shan mountains, our tours 
                    are designed to immerse travelers in the beauty and richness of the 
                    Kyrgyz landscape and culture.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Our team of experienced guides are not only experts in navigation 
                    and travel logistics but are also passionate about sharing the history 
                    and stories of the Kyrgyz people. Join us for an unforgettable journey 
                    and discover the hidden treasures of Central Asia.
                </Typography>
            </Box>
        </Container>
    );
}

export default AboutPage;
