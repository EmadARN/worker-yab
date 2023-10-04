import { Place } from "@mui/icons-material";
import {
  Box,
  Button,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import axios from "axios";
import { IPServer } from "../../../Config/Server";
const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const SignupForm = (style) => {
  const navigate = useNavigate();
  const [inp, setInp] = useState({
    // first_name: "",
    // last_name: "",
    // work_experience: 0,
    // job: "",
  });

  const textHandler = (e, propertyName) => {
    setInp({ ...inp, [propertyName]: e.target.value });
  };

  const submit = () => {
    axios

      .post(
        `${IPServer}/AddUserInf/send/first_level/inf/`,
        inp,
        {
          headers: {
            Authorization: "Barear 1",
          },
        }
        //   {
        //     first_name: inp.first_name,
        //     last_name: inp.last_name,
        //     work_experience: inp.work_experience,
        //     job: inp.job,
        //   }
      )
      .then((res) => {
        if (res.data.status === 200) {
          navigate("/SignUpPage4");
        }
        console.log(res);
      });
  };
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              style,
              "& .MuiTextField-root": {
                my: 1,
                display: "flex",
                width: "100%",
              },
              mt: 18,
              ml: 3,
              width: "31rem",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography
              variant="h5"
              textAlign={"center"}
              fontFamily="Lalezar"
              color="#fdbe33"
            >
              ساخت اکانت جدید
            </Typography>

            <Grid container>
              <Grid item xs={12}>
                <TextField
                  value={inp.first_name}
                  sx={{ style }}
                  color="success"
                  label="نام:"
                  variant="standard"
                  placeholder="نام خود را وارد کنید..."
                  onChange={(e) => textHandler(e, "first_name")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={inp.last_name}
                  sx={{ style }}
                  color="success"
                  label="نام و نام خانوادگی:"
                  variant="standard"
                  placeholder="نام و نام خانوادگی خود را وارد کنید..."
                  onChange={(e) => textHandler(e, "last_name")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={inp.work_experience}
                  sx={{ style, mr: 2 }}
                  color="success"
                  label="سابقه کاری:"
                  variant="standard"
                  placeholder="سابقه کاری خود را وارد کنید..."
                  onChange={(e) => textHandler(e, "work_experience")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={inp.city}
                  sx={{ style }}
                  color="success"
                  label="شهر:"
                  variant="standard"
                  placeholder="شهر خود را وارد کنید..."
                  onChange={(e) => textHandler(e, "city")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={inp.job}
                  sx={{ style }}
                  color="success"
                  label="شغل:"
                  variant="standard"
                  placeholder="شغل خود را وارد کنید..."
                  onChange={(e) => textHandler(e, "job")}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="error"
              sx={{
                width: "100%",
                marginTop: "15px",
                mb: 2,
                bgcolor: "#fdbe33",
              }}
              onClick={submit}
            >
              <Typography sx={{ px: 2 }}>ساخت اکانت </Typography>
            </Button>
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default SignupForm;
