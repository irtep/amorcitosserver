import { Container, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = (): React.ReactElement => {

    return (
      <Container sx={{
        backgroundImage: "darkBlue",
        color: "white",
        borderRadius: 2,
        margin: 1
      }}>
        <Typography>
          Version: 0.0.1
        </Typography>
      </Container>
    );
  }

export default Footer;