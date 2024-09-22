import React, { FormEvent, useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

const Name = ({ title = "World" }) => {
  const [form, setForm] = useState({ email: "", message: "" });
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box id="name" sx={{ p: 2 }}>
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      <Typography variant="h2" component="h2">
        Hobid
      </Typography>
      {["Klaveri mängimine", "Jalgrattaga sõitmine", "Jalgpall"].map(
        (element, index) => (
          <Typography key={index} variant="body1" component="p">
            {element}
          </Typography>
        )
      )}
      <Typography variant="h2" component="h2">
        Kontaktivorm
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="E-mail"
            type="email"
            name="email"
            onChange={handleChange}
            required
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Teade"
            name="message"
            multiline
            rows={4}
            onChange={handleChange}
            required
            fullWidth
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Saada
        </Button>
      </form>
    </Box>
  );
};

export default Name;
