import React from 'react';
import './App.css';
import MyButton from './components/MyButton';
import Container from '@mui/material/Container';
import { Box, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Login from './components/Login';

function App() {
  return (
    <Container maxWidth="sm">
      <Login/>
    </Container>
  );
}

export default App;
