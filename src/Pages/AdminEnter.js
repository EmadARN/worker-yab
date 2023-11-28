import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import {
  Box,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import RightBar from "../components/RightBar/RightBar";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title/Title";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import BtnSignUp from "../components/SignUpItems/BtnSignUp/BtnSignUp";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const AdminEnter = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopBarCss />
      <Grid container height={"50vh"}>
        <Grid item>
          <RightBar display={"none"} />
        </Grid>

        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Title title="کد ورود ادمین را وارد کنید" width={"200px"} />

              <TextField
                id="standard-basic"
                label=" کد ورود"
                variant="filled"
                type="phone_number"
                sx={{
                  marginTop: "25%",
                  "& .MuiFilledInput-underline:after": {
                    borderBottomColor: "#fdbe33",
                  },

                  // width: { xs: "80%", lg: "50%", xl: "100%" },
                }}
              />

              <Box mt={5}>
                <BtnSignUp onClick={navigate("/adminpage")} />
              </Box>
            </Grid>
          </ThemeProvider>
        </CacheProvider>
      </Grid>
    </>
  );
};

export default AdminEnter;
