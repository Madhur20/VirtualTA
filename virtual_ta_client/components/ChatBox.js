import {Box} from "@mui/material";
import TextInputBar from "./TextInputBar";
import Typography from "@mui/material";

export default function ChatBox() {

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
                
                <TextInputBar />
            </Box>
            </Box>
        </div>
    )
}
