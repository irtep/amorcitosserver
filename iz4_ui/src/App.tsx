import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Iz4Provider } from './context/iz4context';
import MainView from './components/MainView';
import Login from './components/Login';
import Register from './components/Register';
import OwnSettings from './components/OwnSettings';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = (): React.ReactElement => {

  return (
    <Container sx={{
      width: "100vw",
      height: "100vh",
      padding: 1
    }}>
      <Iz4Provider>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<OwnSettings />} />
        </Routes>
        <Footer />
      </Iz4Provider>
    </Container>
  );

}

export default App;
