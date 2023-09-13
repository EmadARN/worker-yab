import { styled } from '@mui/material'
import React from 'react'

import Carousel from "react-material-ui-carousel";
import Button from '@mui/material/Button/Button';
import Imgitem from './Imgitem';
import Box from '@mui/material/Box/Box';
const CarouselGrid =styled("grid")(({theme})=>({

    
    
}))


const Carousel1 = (props) => {
  return (
    <>
      <Box sx={{ width:"100%", height: "20%" , border:"1px",position:"relative"}}>
      <Carousel
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "gray",
            borderRadius: 12,
            color:"white",
       
            display:"block"
          },
        }}
        indicatorIconButtonProps={{
          style: {
            zIndex: "900",
            bottom: "70px",
            color: "gray",
            "& .MuiButtonBase-root": {
         
              "@media (max-width:400px)": {
               bottom:"0",
               position:"absolute",
               
              },
            },
           
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "red",
            backgroundColor: "white", // 2
          },
        }}
        sx={{
          width: "100%",
          height: "100%",

          // Change the display size of the dotted buttons
        
        }}
      >
        {props.describtion.map((item, i) => {
          return <Imgitem key={i} item={item} /> ;
        })}

      
      </Carousel>
    </Box>

    <Button sx={{display:{xs:"flex",sm:'none'},  width:"50%",
  height: "60px",
  border: "3px solid #315cfd",
  borderRadius: "45px",
  transition: "all 0.3s",
  cursor: "pointer",
  background: "white",
  fontSize: "1.2em",
  fontWeight: 550,
  margin:"auto",
  "&:hover":{  background: "#315cfd",
    color: "white",
    fontSize: "1.5em"}
  }}>دریافت مشاوره</Button>
    
    </>
  )
}

export default Carousel1



// <Carousel 


// describtion={[
//   {id:1,text:"کارگران حرفه ای",title:"خانه رویایی خود رت به ما بسپرید",image:"https://initiafy-website-images.s3.amazonaws.com/wordpress-upload/2015/06/Canada-New-Worker-Safety-group-of-workers.jpg"},
//   {id:2,text:"ماقابل اعتماد هستیم",title:"خانه ی شما را میسازیم" ,image:"https://initiafy-website-images.s3.amazonaws.com/wordpress-upload/2015/06/Canada-New-Worker-Safety-group-of-workers.jpg"},
//   {id:3,text:'سازندگان حرفه ای',title:"پروژه های خود را به ما بسپارید",image:"https://initiafy-website-images.s3.amazonaws.com/wordpress-upload/2015/06/Canada-New-Worker-Safety-group-of-workers.jpg"}
// ]}      
    
// />