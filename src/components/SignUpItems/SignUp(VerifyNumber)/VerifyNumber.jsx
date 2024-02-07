import React from "react";
import Title from "../../Title/Title";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { useFormik } from "formik";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import * as yup from "yup";
import BtnSignUp from "../BtnSignUp/BtnSignUp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IPServer } from "../../../Config/Server";
import { CookiesProvider, useCookies } from "react-cookie";
import {
  BoxStyle,
  FormStyle,
  GridStyle,
  SignUpVerifyNumberBoxStyle,
  TextFieldStyle,
} from "../style";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const VerifyNumber = ({ phone_number, inputValue }) => {
  const [cookies, setCookie] = useCookies(["phone-number"]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phone_number: "",
    },
    onSubmit: (values) => {},
    validationSchema: yup.object({
      phone_number: yup
        .string()
        .max(15, "حداثر 15 عدد")
        .required("این فیلد الزامی است"),
    }),
  });

  return (
    <>
      <CookiesProvider>
        <Title title="شماره خود را وارد کنید" width={"200px"} />
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Grid
              mt={20}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              sx={GridStyle}
            >
              <Box sx={BoxStyle}>
                {formik.touched.phone_number && formik.errors.phone_number ? (
                  <p style={{ color: "red" }}>{formik.errors.phone_number}</p>
                ) : null}
              </Box>

              <Box sx={BoxStyle}>
                <form
                  style={FormStyle}
                  onChange={formik.handleChange("phone_number")}
                >
                  <TextField
                    onChange={(e) => inputValue(e.target.value)}
                    id="standard-basic"
                    label="شماره همراه"
                    variant="filled"
                    type="phone_number"
                    onBlur={formik.handleBlur("phone_number")}
                    value={formik.values.phone_number}
                    name="phone_number"
                    sx={TextFieldStyle}
                  />
                </form>
              </Box>

              <Box sx={SignUpVerifyNumberBoxStyle}>
                <BtnSignUp
                  linkState={{ phone_number: phone_number }}
                  onClick={
                    phone_number === ""
                      ? formik.handleSubmit
                      : () =>
                          axios
                            .request({
                              method: "GET",

                              url: `${IPServer}/Auth/signup/phone_number=${phone_number}/`,
                            })
                            .then((res) => {
                              console.log(res.data);
                              setCookie("phone-number", phone_number, {
                                path: "/",
                              });
                              navigate("/SignUpPage2");
                            })
                  }
                />
              </Box>
            </Grid>
          </ThemeProvider>
        </CacheProvider>
      </CookiesProvider>
    </>
  );
};

export default VerifyNumber;
