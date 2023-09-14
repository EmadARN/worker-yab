import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button/Button";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

const Grid1 = styled("grid")(({ theme }) => ({
  backgroundColor: "#fdbe33",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",

  height: "80%",
  width: "100%",
  flexDirection: "column",
}));
const Grid2 = styled("box")(({ theme }) => ({
  backgroundColor: " #030f27",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "80%",
  // [theme.breakpoints.up("md")]:{
  //   width:"100%"
  //   }  ,

width:"100%"
  
 
}));

const MainButton = styled("button")(({ theme }) => ({
  width: "40%",
  height: "60px",
  border: "3px solid #315cfd",
  borderRadius: "45px",
  transition: "all 0.3s",
  cursor: "pointer",
  background: "#fff",
  fontSize: "1.2em",
  fontWeight: 550,
  margin: "auto",
  "&:hover": {
    background: "#315cfd",
    color: "white",
    fontSize: "1.5em",
  },
}));

const Contactus = (props) => {
  return (
    <>
      <Grid
  
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection:{xs:"column-reverse",md:"row"},
          width:"100%"
          
        }}
      >
        <Grid1 xs={12} md={6}>
          <Grid
            sx={{
              width: "100%",
              mb: "5%",
              display: "flex",
              justifyContent: "center",
              mt: "5%",
            }}
          >
            <TextField
             sx={{
           
              input:{border:"3px solid #f5f2eb !important"},
              width: "80%",
                label:{color:"#efefef",fontWeight:'bold'},
                '&:hover fieldset':{
                  border:"3px solid white !important"
                },
                '&.MuiInput-underline:after':{
                  borderBottom:"2px solid white !important"
                },
                '& label.Mui-focused':{
                  color:"black !important",
                  fontSize:"20px"
                },
                '&.MuiInput-underline:after':{
                  borderBottomColor:"white !important"
                },
              '&.Mui-focused fieldset':{
                border:" 2px solid white !important"
              }
                
                
                
            }}
              id="outlined-basic"
              label="نام و نام خانوادگی"
              variant="outlined"
            />
          </Grid>
          <Grid
            sx={{
              width: "100%",
              mb: "5%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              sx={{  input:{border:"3px solid #f5f2eb !important"}, label:{color:"#efefef",fontWeight:'bold'},
              '&:hover fieldset':{
                border:"3px solid white !important"
              },
              '& label.Mui-focused':{
                color:"black !important",
                fontSize:"20px"
              },
              '&.MuiInput-underline:after':{
                borderBottomColor:"white !important"
              },
            '&.Mui-focused fieldset':{
              border:" 2px solid white !important"
            }, input:{border:"2px solid white !important"},width: "80%", color: "#fff" ,label:{color:"#efefef",fontWeight:'bold'}}}
              id="outlined-basic"
              label="شماره همراه"
              variant="outlined"
            />
          </Grid>

          <Grid
            sx={{
              width: "100%",
              mb: "5%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              sx={{  input:{border:"3px solid #f5f2eb !important"}, label:{color:"#efefef",fontWeight:'bold'},
              '&:hover fieldset':{
                border:"3px solid white !important"
              },
              '& label.Mui-focused':{
                color:"black !important",
                fontSize:"20px"
              },
              '&.MuiInput-underline:after':{
                borderBottomColor:"white !important"
              },
            '&.Mui-focused fieldset':{
              border:" 2px solid #f5f2eb !important"
            }, input:{border:"2px solid white !important"},width: "80%", color: "#fff" ,label:{color:"#efefef",fontWeight:'bold'}}}
              id="outlined-basic"
              label="حوزه کاری"
              variant="outlined"
            />
          </Grid>

          <Grid></Grid>

          <MainButton
      
          >
            دریافت مشاوره
          </MainButton>
        </Grid1>

        <Grid2 xs={12} md={6}>
          {props.data.map((item) => {
            return (
              <Grid 
                sx={{
                  border: "2px solid #141F35",
                  width: {xs:"80%",md:'80%'},
                  marginBottom: "4%",
                  height: {xs:"30%",md:"20%"},
                  textAlign: {xs:"center"},
                 
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    mt: "5%",
                    mb:{xs:'4%',md:"0"}
                  }}
                >
                  <Box sx={{ margin: "0 5% 0 5%", color: "#fdbe33" }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "#fdbe33", fontWeight: "bold" }}
                      variant="h6"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#fff", fontWeight: "bold",fontSize:{xs:"16px",md:"25px"} }}
                      variant="h5"
                    >
                      {item.info}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid2>
      </Grid>
    </>
  );
};

export default Contactus;


// <Contactus
//   data={
//     [
//       {id:1,icon:<LocationOnIcon sx={{fontSize:"35px"}}/>,title:'آدرس',info:"زنجان اعتمادیه خیابان 12"},
//       {id:2,icon:<LocalPhoneIcon sx={{fontSize:"35px"}}/>,title:'شماره تماس',info:"12345678"},
//       {id:3,icon:<EmailIcon sx={{fontSize:"35px"}}/>,title:'ایمیل',info:"test@gmail.com"}
//     ]
//   }
//   />