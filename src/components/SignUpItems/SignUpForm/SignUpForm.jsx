import { Place } from "@mui/icons-material";
import {Box, Button, createTheme, Grid, TextField, ThemeProvider, Typography} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";

const theme = createTheme({
    direction: "rtl",
});

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const SignupForm = (style) => {
    const navigate = useNavigate();

    ;
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
                    mt: 1,
                    ml: 3,
                    width: "31rem",


                }}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" textAlign={"center"} fontFamily="Lalezar" color="#fdbe33">
                    ساخت اکانت جدید
                </Typography>



                   <Grid container >
                       <Grid item xs={12}>
                           <TextField
                               sx={{ style,  }}
                               color="success"
                               label="نام:"
                               variant="standard"
                               placeholder="نام خود را وارد کنید..."
                           />
                       </Grid>
                       <Grid item xs={12}>
                           <TextField
                               sx={{ style,}}
                               color="success"
                               label="نام و نام خانوادگی:"
                               variant="standard"
                               placeholder="نام و نام خانوادگی خود را وارد کنید..."
                           />
                       </Grid>
                       <Grid item xs={12}>
                           <TextField
                               sx={{ style, mr: 2 }}
                               color="success"
                               label="سابقه کاری:"
                               variant="standard"
                               placeholder="سابقه کاری خود را وارد کنید..."
                           />
                       </Grid>
                       <Grid item xs={12}>
                           <TextField
                               sx={{ style,}}
                               color="success"
                               label="شغل:"
                               variant="standard"
                               placeholder="شغل خود را وارد کنید..."
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
                        bgcolor:"#fdbe33"
                    }}
                    onClick={console.log("click")}
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
