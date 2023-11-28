import React, {useEffect, useState} from "react";
import Title from "../../Title/Title";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Grid, ThemeProvider, createTheme, Alert} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Counter from "lyef-counter";
import { prefixer } from "stylis";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { IPServer } from "../../../Config/Server";
import BtnSignUp from "../BtnSignUp/BtnSignUp";
import { CookiesProvider, useCookies } from "react-cookie";





const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});




const VerifyNumber = ({ set_verify_code, verify_code }) => {
    const [cookies, setCookie] = useCookies(["phone-number"]);
    // let location = useLocation();
    //   console.log('location state : ',location.state)
    //


    const [phone_number2, setPhone_number2] = useState(
        // location.state.phone_number
        cookies["phone-number"]
    );
    const [error, setError] = useState(

        true
    );

    const clickHandler=()=>{
        axios
            .post(
                `${IPServer}/Auth/validate/signup/phone_number/`,
                {
                    phone_number: phone_number2,
                    code: verify_code,
                }
            )
            .then((res) => {

                console.log(res.data)

                if (res.data.status === 200){

                    console.log(res.data.token)

                    setCookie("token", res.data.token.toString(), { path: "/" });

                    if(res.data.signup_level === 2){

                        navigate("/SignUpPage3");

                    }else if(res.data.signup_level === 3){

                        navigate("/SignUpPage4");

                    }else if(res.data.signup_level === 4){

                        navigate("/SignUpPage5");

                    }else{

                        navigate("/");

                    }

                }else{

                    setError(false)
                }

            })



    }

    const formik = useFormik({
        initialValues: {
            verify_code: "",
        },
        onSubmit: (values) => {
            console.log("clicked");
        },
        validationSchema: yup.object({
            verify_code: yup.string().required("این فیلد الزامی است"),
        }),
    });
    const navigate = useNavigate();
    return (
        <>
            <Title title="کد  را وارد کنید" width={"200px"} />
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
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
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            {formik.touched.verify_code && formik.errors.verify_code ? (
                                <p style={{ color: "red" }}>{formik.errors.verify_code}</p>
                            ) : null}
                        </Box>

                        {!error ?                   <Alert variant="outlined" severity="error">

                                کد را اشتباه وارد کرده اید

                            </Alert>
                            : null}

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <form
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                                onChange={formik.handleChange("verify_code")}
                            >
                                <TextField
                                    onChange={(e) => {
                                        set_verify_code(e.target.value);
                                    }}
                                    id="standard-basic"
                                    onBlur={formik.handleBlur("verify_code")}
                                    name="verify_code"
                                    label=" کد را وارد کنید"
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-underline:after": {
                                            borderBottomColor: "#fdbe33",
                                        },

                                        width: { xs: "80%", lg: "50%", xl: "30%" },
                                    }}
                                />
                            </form>
                        </Box>

                        <Box sx={{ my: 10, display: "flex", justifyContent: "center" }}>
                            {/* {contextHolder}  */}

                            <BtnSignUp
                                onClick={
                                    verify_code === ""
                                        ? formik.handleSubmit
                                        : clickHandler()
                                }
                            />
                        </Box>
                    </Grid>
                </ThemeProvider>
            </CacheProvider>
        </>
    );
};

export default VerifyNumber;
