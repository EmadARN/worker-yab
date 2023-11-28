import { Place } from "@mui/icons-material";
import {
  Box,
  Button,
  createTheme,
  FormControl,
  Grid,
  InputLabel,
  MenuItem, Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import axios from "axios";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { IPServer } from "../../../Config/Server";
// import { Select } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";

import { CookiesProvider, useCookies } from "react-cookie";

const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const SignupForm = (style) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);
  console.log('token : ',cookies)
  const [inp, setInp] = useState({
    // first_name: "",
    // last_name: "",
    // work_experience: 0,
    // job: "",
  });
  const textHandler = (e, propertyName) => {
    setInp({ ...inp, [propertyName]: e.target.value });
  };

  const textHandler2 = (e, propertyName) => {
    setInp({ ...inp, [propertyName]: e.target.value });
  };

  const submit = () => {
    axios

      .post(
        `${IPServer}/AddUserInf/send/first_level/inf/`,
        inp,
        {
          headers: {
            Authorization: `Barear ${cookies['token']}`,
          },
        },
        inp
      )
      .then((res) => {
        console.log(res.data)
        if (res.data.status === 200) {
          navigate("/SignUpPage4");
        }
      })

        .catch((error)=>{

          console.log(error)

        })
    ;

  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      work_experience: "",
    },
    onSubmit: (values) => {
      console.log("");
    },
    validationSchema: yup.object({
      first_name: yup.string().required("این فیلد الزامی است"),
      last_name: yup.string().required("این فیلد الزامی است"),
      work_experience: yup.string().required("این فیلد الزامی است"),
    }),
  });

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
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {formik.touched.first_name && formik.errors.first_name ? (
                  <p style={{ color: "red" }}>{formik.errors.first_name}</p>
                ) : null}
              </Box>
              <Grid item xs={12}>
                <form onChange={formik.handleChange("first_name")}>
                  <TextField
                    value={inp.first_name}
                    sx={{ style }}
                    color="success"
                    label="نام:"
                    name="first_name"
                    onBlur={formik.handleBlur}
                    onChange={(e) => textHandler(e, "first_name")}
                    variant="standard"
                    placeholder="نام خود را وارد کنید..."
                  />
                </form>
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {formik.touched.last_name && formik.errors.last_name ? (
                  <p style={{ color: "red" }}>{formik.errors.last_name}</p>
                ) : null}
              </Box>
              <Grid item xs={12}>
                <form onChange={(e) => textHandler(e, "last_name")}>
                  <TextField
                    value={inp.last_name}
                    name="last_name"
                    sx={{ style }}
                    onBlur={formik.handleBlur}
                    color="success"
                    label="  نام خانوادگی:"
                    variant="standard"
                    placeholder="نام و نام خانوادگی خود را وارد کنید..."
                    onChange={formik.handleChange("last_name")}
                  />
                </form>
              </Grid>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {formik.touched.work_experience &&
                formik.errors.work_experience ? (
                  <p style={{ color: "red" }}>
                    {formik.errors.work_experience}
                  </p>
                ) : null}
              </Box>
              <Grid item xs={12}>
                <form onChange={(e) => textHandler(e, "work_experience")}>
                  <TextField
                    type="number"
                    name="work_experience"
                    value={inp.work_experience}
                    sx={{ style, mr: 2 }}
                    color="success"
                    onBlur={formik.handleBlur("work_experience")}
                    label="سابقه کار:"
                    variant="standard"
                    placeholder="سابقه کاری خود را وارد کنید..."
                    onChange={formik.handleChange("work_experience")}
                  />
                </form>
              </Grid>
              <Grid container sx={{ my: { xs: 2, md: 3.5 } }}>
                <Grid item xs={12} md={6} sx={{}}>
                  <Box
                    sx={{
                      "& .select-root": {
                        textAlign: "center",
                        height: "40px",
                        paddingTop: "10px",
                        pl: 1,
                      },
                    }}
                  >
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-simple-select-label">
                        شهر:
                      </InputLabel>
                      <Select
                        className="select-root"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inp.city}
                        label="job"
                        onChange={(e) => textHandler2(e, "city")}
                      >
                        {cities.map((item) => {
                          return (
                            <MenuItem value={item.value}>{item.title}</MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      "& .select-root": {
                        textAlign: "center",
                        height: "40px",
                        paddingTop: "10px",
                        pl: 1,
                      },
                    }}
                  >
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-simple-select-label">
                        شغل:
                      </InputLabel>
                      <Select
                        className="select-root"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inp.job}
                        label="job"
                        onChange={(e) => textHandler2(e, "job")}
                      >
                        {jobs.map((item) => {
                          return (
                            <MenuItem value={item.value}>{item.job}</MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
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
                transition: "all ease 0.8s",
                "&:hover": {
                  bgcolor: "#030F27",
                },
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
const jobs = [
  { job: "مکانیک", value: "مکانیک خودرو" },
  { job: "کارگر ساختمان ", value: "کارگر ساختمانی" },
];

const cities = [{ title: "زنجان", value: "زنجان" }];
