import React, {useState} from "react";
import Title from "../../Title/Title";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Counter from "lyef-counter";
import { prefixer } from "stylis";
const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const VerifyNumber = (props) => {
  return (
    <>
      <Title title="شماره خود را وارد کنید" />
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 20,
              "& .MuiInput-underline:after": {
                borderBottomColor: "#fdbe33",
              },
              "& label.Mui-focused": {
                color: "#030f27",
                fontWeight: "bold",
                fontSize: "22px",
              },
            }}
          >
            <TextField
                onChange={(e)=>props.inputValue(e.target.value)}
              id="standard-basic"
              label="شماره همراه"
              variant="filled"
              sx={{
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "#fdbe33",
                },

             
                width: { xs: "80%", lg: "50%", xl: "30%" },
              }}
            />
          </Grid>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default VerifyNumber;
