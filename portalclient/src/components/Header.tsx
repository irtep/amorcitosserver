import { Container, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = (): React.ReactElement => {

    return (
        <Container sx={{
            backgroundImage: "linear-gradient(to right, red , white, white, red)",
            color: "black",
            borderRadius: 2,
            margin: 1,
            textAlign: "center"
        }}> 
            <Typography variant="h2">
                Amorcitos
            </Typography>
        </Container>
    );
}

export default Header;