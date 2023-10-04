import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button/Button";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Title from "../Title/Title";

const Grid1 = styled("grid")(({ theme }) => ({
  backgroundColor: "#fdbe33",
  display: "flex",
  justifyContent: "flex-end",
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

  width: "100%",
}));

const MainButton = styled("button")(({ theme }) => ({
  width: "40%",
  height: "60px",

  borderRadius: "45px",
  transition: "all 0.3s",
  cursor: "pointer",
  background: "#030f27",
  fontSize: "1.2em",
  color: "#fff",
  fontWeight: 550,
  margin: "auto",

  "&:hover": {
    background: "#030f27",
    color: "#fdbe33",
    fontSize: "1.5em",
  },
}));

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
       width: 320px;
   font-family: IBM Plex Sans, sans-serif;
   font-size: 0.875rem;
   font-weight: 400;
   line-height: 3.5rem;
   padding: 8px 12px;

   border-radius: 8px;
   color: ${theme.palette.mode === "dark" ? grey[300] : "#030f27"};
   background: ${theme.palette.mode === "dark" ? grey[900] : "#fdbe33"};
   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : "#030f27"};

   box-shadow: 0px 2px 2px ${
     theme.palette.mode === "dark" ? grey[900] : "#030f27"
   };

   &:focus {
     border-color: "#030f27"};
     box-shadow: 0 0 0 0px ${
       theme.palette.mode === "dark" ? blue[500] : "#030f27"
     };
  }

   // firefox
   &:focus-visible {
     outline: 0;
   }
 `
);
const Contactus = (props) => {
  return (
    <>
      <Grid
        xs={12}
        sx={{
          ml: { xs: 0, md: 15 },
          mb: { xs: 30, md: 0 },
          mt: { xs: 0, sm: 15 },
        }}
      >
        {" "}
        <Title
          title="نظرات خود را با ما به اشتراک بگزارید
"
        ></Title>
      </Grid>

      <Grid container sx={{ mb: { xs: 0, md: 15 } }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
          }}
        >
          <Grid1 xs={12} md={6}>
            <Grid
              sx={{
                width: "100%",
                mb: "5%",
                display: "flex",
                justifyContent: "center",
                mt: "12%",
              }}
            >
              <TextField
                sx={{
                  width: "80%",
                  input: { color: "#030f27" },
                  label: { color: "#030f27" },
                  "& label.Mui-focused": {
                    color: "#030f27",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#030f27",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#030f27",
                    },
                    "&:hover fieldset": {
                      borderColor: "#030f27",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#030f27",
                    },
                  },
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
                sx={{
                  width: "80%",
                  input: { color: "#030f27" },
                  label: { color: "#030f27" },
                  "& label.Mui-focused": {
                    color: "#030f27",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#030f27",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#030f27",
                    },
                    "&:hover fieldset": {
                      borderColor: "#030f27",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#030f27",
                    },
                  },
                }}
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
                sx={{
                  width: "80%",
                  input: { color: "#030f27" },
                  label: { color: "#030f27" },
                  "& label.Mui-focused": {
                    color: "#030f27",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#030f27",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#030f27",
                    },
                    "&:hover fieldset": {
                      borderColor: "#030f27",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#030f27",
                    },
                  },
                }}
                id="outlined-basic"
                label="حوزه کاری"
                variant="outlined"
              />
            </Grid>

            <Grid
              sx={{
                width: "100%",

                display: "flex",
                justifyContent: "center",
              }}
            >
              <StyledTextarea
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="پیام خود را بگذارید"
              />
            </Grid>

            <MainButton>دریافت مشاوره</MainButton>
          </Grid1>

          <Grid2 xs={12} md={6}>
            {props.data.map((item) => {
              return (
                <Grid
                  sx={{
                    border: "2px solid #141F35",
                    width: { xs: "80%", md: "80%" },
                    marginBottom: "4%",
                    height: { xs: "30%", md: "20%" },
                    textAlign: { xs: "center" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      mt: "5%",
                      mb: { xs: "4%", md: "0" },
                    }}
                  >
                    <Box sx={{ margin: "0 5% 0 5%", color: "#fdbe33" }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#fdbe33",
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "start",
                        }}
                        variant="h6"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: { xs: "16px", md: "25px" },
                        }}
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
      </Grid>
    </>
  );
};

export default Contactus;

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

// <Contactus
//   data={
//     [
//       {id:1,icon:<LocationOnIcon sx={{fontSize:"35px"}}/>,title:'آدرس',info:"زنجان اعتمادیه خیابان 12"},
//       {id:2,icon:<LocalPhoneIcon sx={{fontSize:"35px"}}/>,title:'شماره تماس',info:"12345678"},
//       {id:3,icon:<EmailIcon sx={{fontSize:"35px"}}/>,title:'ایمیل',info:"test@gmail.com"}
//     ]
//   }
//   />
