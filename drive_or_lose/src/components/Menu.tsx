import React, { useState } from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Button } from '@mui/material';

const Menu: React.FC = () => {
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [raceType, setRaceType] = useState('');

  const carOptions = ['Ferrari', 'McLaren', 'Lamborghini', 'Porsche'];
  const raceTypes = ['Time Trial', 'Single Race', 'Championship Series'];
  const colorOptions = [
    'white', 'green', 'darkGreen', 'black', 'navy', 'blue', 'cyan', 'orange', 'gold', 
    'yellow', 'red', 'crimson', 'silver', 'gray', 'pink', 'purple', 'cornsilk',
    'navajowhite', 'aqua', 'aquamarine', 'blueviolet', 'burlyWood', 'cadetBlue', 
    'cornFlowerBlue', 'coral', 'darkBlue', 'darkMagenta', 'magenta', 'darkOrange', 
    'darkSeaGreen', 'deepPink', 'deepSkyBlue', 'fuchsia', 'greenYellow', 'hotPink', 
    'violet', 'yellowGreen'].sort();

  const handleSubmit = () => {
    console.log('Form Data:', { name, car, color1, color2, raceType });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, p: 3 }}>
      {/* Left Column: Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField 
          label="Name" 
          variant="outlined" 
          value={name} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
        />

        <FormControl fullWidth>
          <InputLabel>Car</InputLabel>
          <Select
            value={car}
            onChange={(e) => setCar(e.target.value)}
            label="Car"
          >
            {carOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Color 1</InputLabel>
          <Select
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            label="Color 1"
          >
            {colorOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Color 2</InputLabel>
          <Select
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            label="Color 2"
          >
            {colorOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Race Type</InputLabel>
          <Select
            value={raceType}
            onChange={(e) => setRaceType(e.target.value)}
            label="Race Type"
          >
            {raceTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      {/* Right Column: Lap Records */}
      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 2,
        }}
      >
        <Box sx={{ border: '1px solid #ccc', p: 2 }}>
          <h4>Track 1</h4>
          {/* Placeholder for Track 1 lap records */}
        </Box>
        <Box sx={{ border: '1px solid #ccc', p: 2 }}>
          <h4>Track 2</h4>
          {/* Placeholder for Track 2 lap records */}
        </Box>
        <Box sx={{ border: '1px solid #ccc', p: 2 }}>
          <h4>Track 3</h4>
          {/* Placeholder for Track 3 lap records */}
        </Box>
        <Box sx={{ border: '1px solid #ccc', p: 2 }}>
          <h4>Track 4</h4>
          {/* Placeholder for Track 4 lap records */}
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
