import React from 'react';
import { Container, Box, useMediaQuery, Theme } from '@mui/material';
import Links from './Links';

const Main: React.FC = (): React.ReactElement => {
  // Use useMediaQuery to check if the screen is small (mobile)
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Container
      sx={{
        background: 'black'
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left side - 50% */}
        <Box flex={1} p={2}>
          <Links />
        </Box>
        {/* Right side - 50%, only show if not on mobile */}
        {!isMobile && (
          <Box flex={1} p={2}>
            <img
              src={`/images/queen_y_yaco.png`}
              alt="two dogs"
              style={{ maxWidth: '100%' }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Main;