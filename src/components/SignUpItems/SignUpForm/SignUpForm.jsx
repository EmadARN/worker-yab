import {
  Box,
  Button,
  createTheme,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import axios from "axios";
import { IPServer } from "../../../Config/Server";
import { useFormik } from "formik";
import * as yup from "yup";
import { useCookies } from "react-cookie";
import {
  SignupFormBoxStyle1,
  SignupFormBoxStyleTwo,
  SignupFormBtnStyle,
} from "../style";
import { cities, jobs } from "../data";

const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const SignupForm = ({ style }) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);
  const [inp, setInp] = useState({});
  const [inpfocus, setInpfocus] = useState(false);
  const textHandler = (e, propertyName) => {
    setInp({ ...inp, [propertyName]: e.target.value });
  };
  const textHandler2 = (e, propertyName) => {
    setInp({ ...inp, [propertyName]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${IPServer}/UserInf/account/inf/`, {
        headers: {
          Authorization: `Barear ${cookies["token"]}`,
        },
      })

      .then((res) => {
        setInp(res.data.user_inf);
        setInpfocus(true);
      })
      .catch((err) => {});
  }, []);

  const submit = () => {
    axios

      .post(
        `${IPServer}/AddUserInf/send/first_level/inf/`,
        inp,
        {
          headers: {
            Authorization: `Barear ${cookies["token"]}`,
          },
        },
        inp
      )
      .then((res) => {
        if (res.data.status === 200) {
          navigate("/SignUpPage4");
        }
      })

      .catch((error) => {});
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
          <Box sx={SignupFormBoxStyle1} noValidate autoComplete="off">
            <Typography
              variant="h5"
              textAlign={"center"}
              fontFamily="Lalezar"
              color="#fdbe33"
            >
              ساخت اکانت جدید
            </Typography>

            <Grid container>
              <Grid display="flex" justifyContent="center">
                {formik.touched.first_name && formik.errors.first_name ? (
                  <p style={{ color: "red" }}>{formik.errors.first_name}</p>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <form onChange={formik.handleChange("first_name")}>
                  <TextField
                    focused={inpfocus ? true : false}
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
              <Grid display="flex" justifyContent="center">
                {formik.touched.last_name && formik.errors.last_name ? (
                  <p style={{ color: "red" }}>{formik.errors.last_name}</p>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <form onChange={(e) => textHandler(e, "last_name")}>
                  <TextField
                    focused={inpfocus ? true : false}
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
              <Grid display="flex" justifyContent="center">
                {formik.touched.work_experience &&
                formik.errors.work_experience ? (
                  <p style={{ color: "red" }}>
                    {formik.errors.work_experience}
                  </p>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <form onChange={(e) => textHandler(e, "work_experience")}>
                  <TextField
                    focused={inpfocus ? true : false}
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
                {/* city */}
                <Grid item xs={12} md={6} sx={{ mb: { xs: 2, md: 0 } }}>
                  <Box sx={SignupFormBoxStyleTwo}>
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
                {/* jobs */}
                <Grid item xs={12} md={6}>
                  <Box sx={SignupFormBoxStyleTwo}>
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
              sx={SignupFormBtnStyle}
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
