import { Container, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = (): React.ReactElement => {

    return (
        <Container sx={{
            background: "rgb(0,0,80)",
            color: "green",
            borderRadius: 2,
            margin: 1,
            textAlign: "center"
        }}> 
            <Typography variant="h4">
                iz4
            </Typography>
        </Container>
    );
}

export default Header;