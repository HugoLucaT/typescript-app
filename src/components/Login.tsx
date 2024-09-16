import { FormEvent, useEffect, useState } from 'react';
//import MyButton from '../components/MyButton';

import { Box, Button, Stack, TextField } from '@mui/material';
import { log } from 'console';


export default function Login (){
    const [form, setForm] = useState({password:"", username:""})
    //const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
        
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prevForm => ({...prevForm,[event.target.name]: event.target.value}))
    };

    /*useEffect(()=>{
        console.log("Renders every change");
    });

    useEffect(()=>{
        console.log("Renders once");
    }, []);

    useEffect(()=>{
        console.log("Renders when username changes");
    }, [username]);*/

    return(

        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "35vh"
                }}></Box>
                <TextField id="outlined-basic" name="username" label="Username" variant="outlined" onChange={handleChange} 
                //onChange={(event) => setUsername(event.target.value)}
                />
                <TextField id="outlined-basic" name="password" label="Password" variant="outlined" onChange={handleChange}
                //onChange={(event) => setPassword(event.target.value)}
                />
                <Button variant="contained" type="submit">Log In</Button>
            </Stack>
        </form>
    )
}