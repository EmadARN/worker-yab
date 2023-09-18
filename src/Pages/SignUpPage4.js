import React from 'react'
import { Box, Button, Grid, Stepper, TextField, Typography } from "@mui/material";
import { useState,useEffect,useRef,useCallback } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Camera from '../components/AllCameras/Camera.jsx'
import Webcam from "react-webcam";
import TopBarCss from '../components/topbarcss/TopBarCss.js';
import RightBar from '../components/RightBar/RightBar.jsx';
import Stepper1 from '../components/SignUpItems/Stepper/Stepper.jsx'
const SignUpPage4 = () => {

  const MainGrid = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
   
  
    
  };



const [openCamera,setOpenCamera] =useState(false)
  return (
    <>
    <TopBarCss/>
    <Grid container >
    <Grid item xs={2}>
          <RightBar />
        </Grid>
      <Grid  style={MainGrid}  container xs={10} md={12}>
        <Stepper1/>
        <Box mb={4} sx={{mt:{xs:'10%'}}}>
          <Typography fontFamily={"Lalezar"} variant="h4">
            بارگذاری چهره متقاضی
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography
            fontFamily={"Yekan"}
            sx={{ whiteSpace: { xs: "wrap" } }}
          >
            با رعایت قوانین مشخص شده در انتهای صفحه ,از چهره تان عکس بگیرید و
            آن را بارگذاری کنید
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#EBECF2",
            width: { xs: "50%", md: "30%" },
            padding: { xs: "3%", md: "1%" },
            justifyContent: "center",
            m: "4% 0 6% 0",
          }}
        >
          <Typography
            sx={{
              marginLeft: "10px",
              whiteSpace: { xs: "nowrap", md: "wrap" },
            }}
            fontFamily={"Yekan"}
          >
            تصویر چهره متقاضی
          </Typography>
          <AddAPhotoIcon />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: "4%",
            width: { xs: "90%", md: "100%" },
          }}
        >
          <img
            style={{ width: "20%" }}
            src="https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
            alt=""
          />
        </Box>
      
        {openCamera ?<Grid direction={"column"} ><Camera onClose={()=>{setOpenCamera(false)}}/>  </Grid>: null}
 
      
        <Box mb={4}>
          <Typography sx={{mb:{xs:"6%",md:"none"}}} fontFamily={"Lalezar"} variant="h5">
            قوانین عکس برداری
          </Typography>
          <Typography fontFamily={"Yekan"} variant="h6">
            {" "}
            تمام رخ روبه روی دوربین بایستید و از چهره تان عکس بگیرید
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "18px", md: "20px" } }}
            fontFamily={"Yekan"}
            variant="h6"
          >
            لازم است عکستان با پس زمینه سفید و بدون عینک و کلاه و زیورالات
            باشد
          </Typography>
        </Box>

        <Box>
          <TextField sx={{mb:{xs:'9%',md:"0"}}}  type="file"></TextField>
         <Button sx={{marginRight:"10px",backgroundColor:"gray",color:'white',fontSize:'20px',borderRadius:"7px",padding:"10px",  "&:hover": { backgroundColor: "#030f27" },}} onClick={()=>setOpenCamera(true)}>باز شدن دوربین</Button> 
        </Box>

        <Box
          mt={4}
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            sx={{
              backgroundColor: "#01B0F1",
              color: "white",
              borderRadius: "7px",
              fontSize: "20px",
              width: "20%",
              "&:hover": { backgroundColor: "#030f27" },
            }}
          >
            ادامه
          </Button>
        </Box>
      </Grid>

      

    </Grid>
  </>
  )
}

export default SignUpPage4