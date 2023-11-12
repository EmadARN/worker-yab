import { Place } from "@mui/icons-material";
import {
  Box,
  Button,
  createTheme,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
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
import { Select } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./signUp.module.css";
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
;



  const textHandler = (e, propertyName) => {
    setInp({ ...inp, [propertyName]: e.target.value });
  };

  const textHandler2 = (e, propertyName) => {
    setInp({ ...inp, [propertyName]: e });
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
        },
        inp
      )
      .then((res) => {
        if (res.data.status === 200) {
          navigate("/SignUpPage4");
        }
        console.log(res.data);
      });
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      work_experience: "",
    },
    onSubmit: (values) => {
      console.log("clicked");
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
                    label="سابقه کاری:"
                    variant="standard"
                    placeholder="سابقه کاری خود را وارد کنید..."
                    onChange={formik.handleChange("work_experience")}
                  />
                </form>
              </Grid>
              <Grid item xs={12}>
             
                <Box sx={{ minWidth: 120 }}>
                  <FormControl color="success"  fullWidth>
                    <InputLabel id="demo-simple-select-label">شهر:</InputLabel>
                    <Select
                    
                      className={styles.center}
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
              <Grid mt={2} item xs={12}>
                
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">شغل:</InputLabel>
                    <Select
                      className={styles.center}
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
              onClick={
                
             submit
              }
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
  { job: "مکانیک", value: "mechanic" },
  { job: "کارگر ساختمان ", value: "kargar" },
];

const cities = [{ title: "زنجان", value: "zanjan" }];
