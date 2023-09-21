import {Button, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import React from "react";

const SignUpPage5 = () =>{
    return(
        <>
            <TopBarCss/>
            <Grid container >
                <Grid item xs={2}>
                    <RightBar />
                </Grid>
                <Grid container >
                    <Stepper1/>
                        <Grid item xs={12} sm={12} md={12} xl={12} sx={{textAlign:"center" , marginTop:"10%" }}>
                            <Typography variant="h2" >
                                برای ثبت نهایی دکمه زیر را بزنید
                            </Typography>
                            <Button variant="contained" color="info" sx={{mt:5}}>ثبت اطلاعات حساب</Button>
                        </Grid>
                </Grid>
            </Grid>

        </>
    )
}
export default SignUpPage5