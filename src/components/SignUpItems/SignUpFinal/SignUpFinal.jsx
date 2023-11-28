import {

  CardMedia,

  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { prefixer } from "stylis";
import { IPServer } from "../../../Config/Server";
import axios from "axios";
import { CookiesProvider, useCookies } from "react-cookie";
const SignUpFinal = () => {
  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
    const [cookies, setCookie] = useCookies(["token"]);
    const[user,setUser]=useState({
        first_name:"",
        last_name:"",
        job:"",
        work_experience:"",
        profile_image:"",
        city:"",
        phone_number:""
    })


  useEffect(()=>{
      axios.get(`${IPServer}/UserInf/account/inf/`
      ,
          {
              headers: {
                  Authorization: `Barear ${cookies['token']}`,
              },
          },
      )

          .then(
          (res)=>{
              setUser(res.data.user_inf)}


          )
          .catch((err)=>{
              console.log(err)})

  },[])

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 5,
              border: "2px solid #fdbe33",
              p: 2,
              borderRadius: "20px 0 20px 0",
            }}
          >
            <CardMedia
              sx={{
                p: 2,
                border: "1px solid #fdbe33 ",
                borderRadius: "0 20px  0 20px ",
              }}
              component="img"
              height="270"
              width="270"
              image={user.profile_image}
              alt="Paella dish"
            />
          </Grid>
          <Grid container sx={{ justifyContent: "center" }}>



            <Grid>
              <TextField
                sx={{
                  mb: 1,
                  "& label.MuiFormLabel-root": {
                    color: "#030f27",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  },
                  "& .MuiInputBase-input:before": {
                    borderBottomColor: "#030f27",
                  },
                  "& input.MuiInputBase-input ": {
                    bgcolor: "#fdbe33",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  },
                }}
                disabled
                id="filled-disabled"
                label="نام:"
                value={user.first_name}
                variant="filled"
              />
            </Grid>
            <Grid sx={{ ml: { xs: 0, md: 1 } }}>
              <TextField
                sx={{
                  mb: 2,
                  "& label.MuiFormLabel-root": {
                    color: "#030f27",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  },
                  "& .MuiInputBase-input:before": {
                    borderBottomColor: "#030f27",
                  },
                  "& input.MuiInputBase-input ": {
                    bgcolor: "#fdbe33",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  },
                }}
                disabled
                id="filled-disabled"
                label="نام خانوادگی:"
                value={user.last_name}
                variant="filled"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid>
              <TextField
                sx={{
                  mb: 2,
                  "& label.MuiFormLabel-root": {
                    color: "#030f27",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  },
                  "& .MuiInputBase-input:before": {
                    borderBottomColor: "#030f27",
                  },
                  "& input.MuiInputBase-input ": {
                    bgcolor: "#fdbe33",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  },
                }}
                disabled
                id="filled-disabled"
                label="سابقه کاری:"
                value={user.work_experience}
                variant="filled"
              />
            </Grid>
            <Grid sx={{ ml: { xs: 0, md: 1 } }}>
              <TextField
                sx={{
                  mb: 2,
                  "& label.MuiFormLabel-root": {
                    color: "#030f27",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  },
                  "& .MuiInputBase-input:before": {
                    borderBottomColor: "#030f27",
                  },
                  "& input.MuiInputBase-input ": {
                    bgcolor: "#fdbe33",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  },
                }}
                disabled
                id="filled-disabled"
                label="شغل:"
                value={user.job}
                variant="filled"
              />
            </Grid>
          </Grid>
          <Grid sx={{ ml: { xs: 0, md: 1 } }}>
            <TextField
              sx={{
                mb: 3,
                "& label.MuiFormLabel-root": {
                  color: "#030f27",
                  fontSize: "20px",
                  fontWeight: "bolder",
                },
                "& .MuiInputBase-input:before": {
                  borderBottomColor: "#030f27",
                },
                "& input.MuiInputBase-input ": {
                  bgcolor: "#fdbe33",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                },
              }}
              disabled
              id="filled-disabled"
              label="شهر:"
              value={user.city}
              variant="filled"
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default SignUpFinal;
