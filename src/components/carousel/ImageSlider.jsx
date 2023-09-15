import { styled, Typography } from "@mui/material";
import React from "react";
import 'animate.css';
import { useState } from "react";
import Button from "@mui/material/Button/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from "@mui/material/Box/Box";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BtnAnimation from "../BtnAnimation/BtnAnimation";


const Button1 = {
  width: "60%",
  height: "60px",
  border: "3px solid #315cfd",
  borderRadius: "45px",
  transition: "all 0.3s",
  cursor: "pointer",

  fontSize: "1.2em",
  fontWeight: 550,
  margin: " 0 auto 15% auto",
};

const ImageSlider1 = [
  {
    id: 1,
    text: "کارگران حرفه ای",
    title: "خانه رویایی خود رت به ما بسپرید",
    image:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",

  },
  {
    id: 2,
    text: "ماقابل اعتماد هستیم",
    title: "خانه ی شما را میسازیم",
    image:
      "https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    text: "سازندگان حرفه ای",
    title: "پروژه های خود را به ما بسپارید",
    image:
      "https://images.unsplash.com/photo-1565954786194-d22abeaac3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  },
];

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];
const ImageSlider = () => {
  return (
    <>
      <div style={{ width: "100% !important" }} className="slide-container">
        <Slide indicators={false} duration={3000} reponsive={responsiveSettings} prevArrow={<button style={{background:"none",border:"none",marginLeft:"2%",color:"white",marginBottom:"26%",fontSize:"30px",textAlign:"center",width:"30px"}}><ChevronLeftIcon sx={{fontSize:"50px"}}/></button>} nextArrow={<button style={{background:"none",border:"none",color:"white",marginBottom:"26%",width:"30px",marginRight:'3%'}}><ChevronRightIcon sx={{fontSize:"50px"}}/></button>} >
          {ImageSlider1.map((image, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                  height:"15%",
                width: "100% !important",
                mt:{xs:"16%",md:"10%"},
              
                
              }}
            >
              <img style={{ width: "100%" }} src={image.image} />
              <Box 
              
                sx={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  top: {sm:'4%',md:"20%"},

                 
                 
                }}
              >
                <Typography
               
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "23px", sm: "25px", md: "35px" },
                  }}
                >
                  {image.text}
                </Typography>
                <Typography
  
                variant="h2"
                  sx={{mb:"10%", color: "#fff", fontWeight: "bold", fontSize:{xs:"25px",sm:"35px",md:"45px",whiteSpace:'nowrap'}}}
                >
                  {image.title}
                </Typography>

                <Box sx={{display:{xs:"none",sm:"flex"}}}>
                <BtnAnimation
                title="دریافت مشاوره "
                color="#fff"
                size="18px"
                fweight="700"
              />
</Box>

              </Box> 
            </Box>
          ))}
        </Slide>
      </div>

      <Button
        sx={{
          background: "white",
          "&:hover": {
            background: "#315cfd",
            color: "white",
            fontSize: "1.5rem",
          },
          display: { xs: "flex", sm: "none" },
        }}
        style={Button1}
      >
        دریافت مشاوره
      </Button>
    </>
  );
};

export default ImageSlider;
