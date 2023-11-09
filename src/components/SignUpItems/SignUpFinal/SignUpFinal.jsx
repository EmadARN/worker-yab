import {
  Avatar,
  CardMedia,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Counter from "lyef-counter";
import { prefixer } from "stylis";
const SignUpFinal = () => {
  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
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
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
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
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    "&:hover": {
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    },
                  },
                }}
                disabled
                id="filled-disabled"
                label="نام:"
                defaultValue="نام"
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
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    "&:hover": {
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    },
                  },
                }}
                disabled
                id="filled-disabled"
                label="نام خانوادگی:"
                defaultValue="نام خانوادگی"
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
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    "&:hover": {
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    },
                  },
                }}
                disabled
                id="filled-disabled"
                label="سابقه کاری:"
                defaultValue="سابقه کاری"
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
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    "&:hover": {
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    },
                  },
                }}
                disabled
                id="filled-disabled"
                label="شغل:"
                defaultValue="شغل"
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
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  "&:hover": {
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  },
                },
              }}
              disabled
              id="filled-disabled"
              label="شهر:"
              defaultValue="شهر"
              variant="filled"
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default SignUpFinal;
