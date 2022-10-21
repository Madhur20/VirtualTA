import * as React from 'react';
import {Box} from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material";
import axios from "axios";
import ScrollableChat from "./ScrollableChat";
// import EquationEditor from "equation-editor-react";
// import 'mathquill/build/mathquill.css';

export default function ChatBox() {

    const messageType = [{
        id: String,
        msg: String,
    }]

    const [question,setQuestion] = React.useState("");
    const [isSuper, setIsSuper] = React.useState(false);
    const [answer, setAnswer] = React.useState("");
    const [messages, setMessages] = React.useState([]);


    const handleChange = (e) => {
        // console.log(e);
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
    const sendChange = async (e) => {
        // console.log(e.keyCode);
        if(e.keyCode == 39){
            setIsSuper(false);
        }
        
        if(e.keyCode == 13){
            // console.log(question);
            const ques = {
                id: "fromUser",
                msg: question,
            }
            setMessages(messages => messages.concat(ques));
            // setMessages([...messages, ques]);
            //await axios.post("http://localhost:5000/userQuery", question);
            const ans = await fetch("http://localhost:8080/sendAnswer/"+ question)
                        .then(res => res.json())
                        .then((jsonRes) => {
                            
                            return jsonRes.answer;
                            //console.log(jsonRes.answer);
                        })
                        .catch((e) => {
                            console.log(e);
                        })
            setAnswer(ans);
            const data = {
                id: "fromBot",
                msg: ans,
            }

            setMessages(messages => messages.concat(data));

            // setMessages([...messages, data]);
            setQuestion("");
        }
        
    }

    return(
        <div style={{height:"90vh", width:"100%"}}>
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
                borderRadius:"15px",
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
                maxHeight:"85%",
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
                height:"90%",
                maxHeight:"90%",
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
                    <ScrollableChat message = {messages} />
                </Box>
                
                <Box
                    sx={{
                        width:"100%",
                        border:"1px solid lightblue",
                        borderRadius:"10px",
                    }}
                    >
                    
                        {/* //<EquationEditor> */}
                        <TextField 
                        id="text-bar"
                        label="Ask Something..." 
                        variant="outlined" 
                        fullWidth
                        value={question}
                        onChange={handleChange}
                        onKeyDown={sendChange}
                    />
                        {/* </EquationEditor> */}

                </Box>
            </Box>
            </Box>
        </div>
    )
}
