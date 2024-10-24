import { Container } from '@mui/material';
import React from 'react';
import Header from './components/mainportal/Header';
import Main from './components/mainportal/Main';
import Footer from './components/mainportal/Footer';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = (): React.ReactElement => {

  return (
    <Container sx={{
      background: "black",
      width: "100vw",
      height: "100vh",
      padding: 1
    }}>
      <Routes>
        <Route path="/iz4" element={<MainView
          username={username}
          token={token}
          setToken={setToken}
          setUsername={setUsername}
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          apiCall={apiCall}
          message={message}
          apiData={apiData}
          setApiData={setApiData}
        />
        }
        />

        <Route path="/iz4/login" element={<Login
          setToken={setToken}
          setUsername={setUsername}
        />
        }
        />

        <Route path="/iz4/register" element={<Register
          setToken={setToken}
          setUsername={setUsername}
        />
        }
        />

        <Route path="/iz4/settings" element={<OwnSettings
          username={username}
          token={token}
          apiCall={apiCall}
        />
        }
        />
      </Routes>

      <Header />

      <Main />

      <Footer />

    </Container>
  );

}

export default App;
