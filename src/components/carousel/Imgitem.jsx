import React from 'react'
import { Box, Button } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography';
import 'animate.css';

const Imgitem = (props) => {
  return (
   <>
      
        <Box sx={{ position: "relative"}}>
         <img
          src={props.item.image}
          alt=""
          style={{ width: "100%", height:'100%', objectFit:"cover"}}
        /> 

<Box sx={{position:"absolute",display:'flex',justifyContent:'center',flexDirection:"column",alignItems:"center",top:"0",bottom:"0",width: "calc(100vw - 20px)"}}>
<Typography className="animate__animated animate__backInRight" sx={{color:'#fff',fontWeight:"bold",textAlign:"center",fontSize:{xs:"24px",md:"35px"}}} variant='h4'>{props.item.text}</Typography>
<Typography className='animate__animated animate__backInLeft' sx={{color:"#fff",fontWeight:"bold",textAlign:"center",fontSize:{xs:"24px",md:"45px"}}} variant='h2'>{props.item.title}</Typography>
<Box sx={{"@media (max-width:770px)":{position:"absolute",bottom:"25%"},display:{xs:"none",sm:"flex"}}}>
  <Button sx={{top:"90%",border:"1px solid white",padding:"10px 40px",borderRadius:"7px",color:"white",fontWeight:"bold",cursor:"pointer","&:hover":{backgroundColor:"gray",}}}>دریافت مشاوره</Button>
</Box>
</Box>



        </Box>
        
  



        

      

   </>
  )
}

export default Imgitem