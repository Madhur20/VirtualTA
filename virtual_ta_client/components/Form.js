// import Button from ""

import { bgcolor } from "@mui/system";
import Link from 'next/link';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export default function Form() {
    return (
      <div id="button" style={{display:"flex", justifyContent:"center", alignContent:"center", margin:"15%", }}>
       
        <button style={{borderRadius:"90px", padding:"1%", backgroundColor:"#AE4FF7",}}>
        <Tabs centered>
          <Link href="/chatBot" passHref><Tab label="Start your Chat!" sx={{color:"black", fontSize:"25px"}}/></Link>
        </Tabs>
        </button>
      </div>
    )
  }