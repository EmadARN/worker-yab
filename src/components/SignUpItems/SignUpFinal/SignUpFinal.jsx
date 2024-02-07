import { CardMedia, Grid, ThemeProvider, createTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { IPServer } from "../../../Config/Server";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  SignUpFinalCardMediaStyle,
  SignUpFinalGridStyle,
  SignUpFinalGridStyleTwo,
  SignUpFinalTextfieldStyleTwo,
} from "../style";

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
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    job: "",
    work_experience: "",
    profile_image: "",
    city: "",
    phone_number: "",
  });

  useEffect(() => {
    axios
      .get(`${IPServer}/UserInf/account/inf/`, {
        headers: {
          Authorization: `Barear ${cookies["token"]}`,
        },
      })

      .then((res) => {
        setUser(res.data.user_inf);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            display="flex"
            justifyContent="center"
            mb={5}
            p={2}
            sx={SignUpFinalGridStyle}
          >
            <CardMedia
              sx={SignUpFinalCardMediaStyle}
              component="img"
              height="270"
              width="270"
              image={user.profile_image}
              alt="Paella dish"
            />
          </Grid>
          <Grid container justifyContent="center">
            <Grid>
              <TextField
                sx={SignUpFinalTextfieldStyleTwo}
                disabled
                id="filled-disabled"
                label="نام:"
                value={user.first_name}
                variant="filled"
              />
            </Grid>
            <Grid sx={SignUpFinalGridStyleTwo}>
              <TextField
                sx={SignUpFinalTextfieldStyleTwo}
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
                sx={SignUpFinalTextfieldStyleTwo}
                disabled
                id="filled-disabled"
                label="سابقه کاری:"
                value={user.work_experience}
                variant="filled"
              />
            </Grid>
            <Grid sx={SignUpFinalGridStyleTwo}>
              <TextField
                sx={SignUpFinalTextfieldStyleTwo}
                disabled
                id="filled-disabled"
                label="شغل:"
                value={user.job}
                variant="filled"
              />
            </Grid>
          </Grid>
          <Grid sx={SignUpFinalGridStyleTwo}>
            <TextField
              sx={SignUpFinalTextfieldStyleTwo}
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
