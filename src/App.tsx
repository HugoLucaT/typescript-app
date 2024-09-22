import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/Home";

function App() {
  return (
    <Container maxWidth="sm">
      <Header />
      {useLocation().pathname === "/typescript-app" ? <HomePage /> : <Outlet />}
    </Container>
  );
}

export default App;
