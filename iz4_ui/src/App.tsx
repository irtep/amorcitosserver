import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Iz4Provider } from './context/iz4context';
import MainView from './components/MainView';
import Login from './components/Login';
import Register from './components/Register';
import OwnSettings from './components/OwnSettings';

const App: React.FC = (): React.ReactElement => {

  return (
    <Container sx={{
      background: "black",
      width: "100vw",
      height: "100vh",
      padding: 1
    }}>
      <Iz4Provider>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<OwnSettings />} />
        </Routes>
      </Iz4Provider>
    </Container>
  );

}

export default App;
