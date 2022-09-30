import {Box} from "@mui/material";



export default function ChatBox() {
    return(
        <div>
            <Box sx={{
                backgroundColor:"beige", 
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"black",
                marginTop:"10%",
                marginBottom:"10%",
                marginLeft:"20%",
                marginRight:"20%",
                padding:"100px"
            }}>
                
                Start chat here!
            </Box>
        </div>
    )
}