import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const ButtonStyle = {
  textAlign: "right",
  marginRight: "10%",
  fontFamily: "Yekan",
  fontWeight: "bold",
  fontSize: "20px",
};

const MainGrid = {
  display: "felx",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
};

const InnerGrid = {
  border: "1px solid gray",
  width: "25%",
  backgroundColor: "#fdbe33",
  height: "450px",

  borderRadius: "7px",
};

const ConfirmbtnBox={
  marginTop: "10%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  width: "90%",
  marginRight: "4%",
  backgroundColor: "#030f27",
}

const VerifyCode = (props) => {

const [value,setValue]=useState([])

const InputRef=useRef()



  function myFunc(event){
if(setValue(event.key) == 'Backspace'){
 setValue(value.pop()) ;

}
  for(var i =1 ; i<=value.length;i++){
  setValue(value+= "_");
  setValue(value.shift());
  
  }
  console.log(value);
  }

  return (
    <>
      <Grid container style={MainGrid}>
        <Grid style={InnerGrid}>
          <Typography
            fontWeight="bold"
            fontSize="25px"
            color="##030f27"
            sx={{ textAlign: "center", marginTop: "12%" }}
          >
            کد تایید را وارد کنید
          </Typography>
          <Box sx={{ textAlign: "center", margin: "6% 0 12% 0" }}>
            <Typography color="#030f27" fontWeight="bold" fontSize="18px">
              کد تایید برای شماره {props.number}ارسال شد
            </Typography>

            <Box sx={{ mt: "10%" }}>
              <TextField
              onKeyDown={(e) => myFunc(e)}
              value={value}
            ref={InputRef}
              onChange={(e)=>setValue(e.target.value)}
                sx={{
                  width: "80%",
                  borderRadius: "7px",
                  input: { border: "3px solid #030f2 !important" },
                  width: "80%",

                  "&:hover fieldset": {
                    border: "3px solid black !important",
                  },
                }}
                variant="outlined"
              />
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                "&:hover": {
                  color: "gray",
                },
                color: " black",
               
              }}
              style={ButtonStyle}
            >
              ورود با رمز عبور
            </Button>
          </Box>

          <Box
         style={ConfirmbtnBox}
          >
            <Button sx={{ color: "white", padding: "8px 0", fontSize: "20px" }}>
              تایید
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default VerifyCode;
