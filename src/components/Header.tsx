import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/typescript-app">
            Home Page
          </Button>
          <Button color="inherit" component={Link} to="/typescript-app/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/typescript-app/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
