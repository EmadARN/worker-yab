import { Place } from "@mui/icons-material";
import {Box, Button, createTheme, Grid, TextField, ThemeProvider, Typography} from "@mui/material";
import React from "react";
import SignupWithGoogle from "../../signupgoogle/SignUpGoogle";
import { Link, useNavigate } from "react-router-dom";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {Footer} from "../../Footer/Footer";

const theme = createTheme({
    direction: "rtl",
});

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const SignupForm = (style) => {
    const navigate = useNavigate();
    const texFiled = [
        { id: 1, label: "نام:", place:"نام خود را وارد کنید...", onchange: () => console.log("okay1") },
        { id: 2, label: "نام خانوادگی:",place:"نام خانوادگی خود را وارد کنید...", onchange: () => console.log("okay2") },
        { id: 3, label: "کد ملی:",place:"کد ملی خود را وارد کنید...", onchange: () => console.log("okay3") },
        { id: 4, label: "محل سکونت:",place:"محل سکونت خود را وارد کنید...", onchange: () => console.log("okay4") },
        { id: 5, label: "کد پستی:",place:"کدپستی خود را وارد کنید...", onchange: () => console.log("okay4") },
    ];
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
                    mt: 5,
                    ml: 3,
                    width: "35rem",

                }}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" textAlign={"center"} fontFamily="Lalezar" color="#fdbe33">
                    ساخت اکانت جدید
                </Typography>


                {texFiled.map((item) => {
                    return (
                        <TextField
                            sx={{ style, pb: 2}}
                            color="grey"
                            label={item.label}
                            variant="standard"
                            onChange={item.onchange}
                            placeholder={item.place}
                        />
                    );
                })}
                <Grid xs={12} sm={12} md={12} xl={12} sx={{ display: "flex", justifyContent: "center", width:"100%" }}>
                    <SignupWithGoogle />
                </Grid>

                <Button
                    variant="contained"
                    color="error"
                    sx={{
                        width: "100%",
                        marginTop: "15px",
                        mb: 2,
                        bgcolor:"#fdbe33"
                    }}
                    onClick={console.log("click")}
                >
                    <Typography sx={{ px: 2 }}>ساخت اکانت </Typography>
                </Button>
                <Typography sx={{ textAlign: "center", mb: 8 }}>
                    آیا اکانت دارید؟{"  "}
                    <span
                        style={{
                            borderBottom: "1px solid black",
                            marginLeft: "7px",
                            cursor: "pointer",
                        }}
                    >
            <Link
                style={{
                    textDecoration: "none",
                    color: "#444",
                }}
                to={"/Login"}
            >
              ورود
            </Link>
          </span>
                </Typography>

            </Box>

                </ThemeProvider>
            </CacheProvider>

        </>
    );
};

export default SignupForm;
