import * as React from 'react';
import {Box} from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material";
import axios from "axios";

export default function ChatBox() {

    const [question,setQuestion] = React.useState("");
    const [isSuper, setIsSuper] = React.useState(false);

    const handleChange = (e) => {
        console.log(e);
        const val = e.target.value;
        
        if(val.charAt(val.length-1) === "^"){
            if(isSuper){
                setIsSuper(false);
            }
            else{
                setIsSuper(true);
            }
            setQuestion(val.substring(0,val.length-1));
        }
        else{
            if(isSuper){
                
                const toSuper = val[val.length-1];
                const tryd = <Text style={{fontsize: 15, lineHeight: 18}} > {toSuper} </Text>
                console.log(tryd);
                const toAppend = val.substring(0,val.length-1) + tryd.props.children[1];
                setQuestion(toAppend);
              
            }
            else{
                setQuestion(e.target.value);
            }
        }
        // console.log(isSuper);
    }
    const sendChange = (e) => {
        // console.log(e.keyCode);
        if(e.keyCode == 39){
            setIsSuper(false);
        }
        
        if(e.keyCode == 13){
            console.log(question);
            //await axios.post("/localhost:8080/userQuery", question);
            //await fetch("/localhost:8080/sendAnswer")
            //.then(res => res.json())
            //.then((jsonRes) => {
            //    setAnswer(jsonRes);
            //})
            //.catch((e) => {
            //     console.log(e);
            // })
            setQuestion("");
        }
    }

    return(
        <div style={{height:"85vh", width:"100%"}}>
            <Box sx={{
                height:"90%",
                backgroundColor:"pink", 
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                color:"black",
                marginTop:"3%",
                marginBottom:"10%",
                marginLeft:"20%",
                marginRight:"20%",
                padding:"10px",
                borderRadius:"15px"
            }}>
                
                <Box sx={{
                    width:"100%",
                    
                    backgroundColor:"white", 
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"black",
                    padding:"5px",
                    borderRadius:"15px"
                }}>
                
                    <h1 style={{fontFamily:"serif", color:"black"}}>Ask your doubts below!</h1>
                </Box>
            <Box sx={{
                width:"100%",
                height:"100%",
                backgroundColor:"white", 
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                color:"black",
                margin:"10px",
                padding:"10px",
                borderRadius:"15px",
            }}>

                <Box sx={{
                width:"100%",
                height:"100%",
                backgroundColor:"white", 
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"black",
                marginBottom:"10px",
                padding:"10px",
                borderRadius:"15px",
                border:"1px solid pink",
            }}>
                    Scrollable Chat
                </Box>
                
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
            </Box>
            </Box>
        </div>
    )
}
