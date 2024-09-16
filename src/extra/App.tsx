import React from 'react';
import './App.css';

import Container from '@mui/material/Container';
import Login from '../components/Login';

function App() {
  return (
    <Container maxWidth="sm">
      <Login/>
      <p>extra</p>
    </Container>
  );
}

export default App;
