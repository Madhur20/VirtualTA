import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { borderRadius } from '@mui/system';

export default function TextInputBar() {

    const [question,setQuestion] = React.useState("");

    const handleChange = (e) => {
        setQuestion(e.target.value);
        // console.log(e.target.value);
    }
    const sendChange = (e) => {
        if(e.keyCode == 13){
            console.log(question);
            setQuestion("");
        }
    }

    return (
        <Box
        sx={{
            width:"100%",
            border:"1px solid lightblue",
            borderRadius:"10px",
        }}
        >
        <TextField 
            id="text-bar"
            label="Ask Something..." 
            variant="outlined" 
            fullWidth
            value={question}
            onChange={handleChange}
            onKeyDown={sendChange}
        />
        </Box>
    );
}
