import React, { useState } from "react";
import Title from "../../Title/Title";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { useFormik } from "formik";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Counter from "lyef-counter";
import { prefixer } from "stylis";
import * as yup from "yup";
import BtnSignUp from "../BtnSignUp/BtnSignUp";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { IPServer } from "../../../Config/Server";
const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const VerifyNumber = ({phone_number,inputValue}) => {


  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phone_number: "",
    },
    onSubmit: (values) => {
      console.log("clicked");;
    },
    validationSchema: yup.object({
      phone_number: yup
        .string()
        .max(15, "حداثر 15 عدد")
        .required("این فیلد الزامی است"),
    }),
  });

 


  return (
    <>
      <Title title="شماره خود را وارد کنید" />
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Grid
            sx={{
              flexDirection:"column",
             
              display: "flex",
              justifyContent: "center",
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
            <Box sx={{display:"flex",justifyContent:'center'}}>
            {formik.touched.phone_number && formik.errors.phone_number ? (
              <p style={{ color: "red" }}>{formik.errors.phone_number}</p>
            ) : null}
            </Box>


            <Box sx={{display:"flex",justifyContent:'center'}}>
              <form style={{width:"100%" , display:'flex',justifyContent:"center"}} onChange={formik.handleChange("phone_number")}>

            <TextField
             onChange={(e)=> inputValue(e.target.value)}
              
              id="standard-basic"
              label="شماره همراه"
              variant="filled"
              type="phone_number"
              onBlur={formik.handleBlur("phone_number")}
              value={formik.values.phone_number}
              name="phone_number"
              sx={{
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "#fdbe33",
                },

                width: { xs: "80%", lg: "50%", xl: "30%" },
              }}
            />
            </form>
            </Box>


            <Box
            
            sx={{
              display:"felx",
              justifyContent:"center",
              my: 10,
            
            }}
          >
            <BtnSignUp
              linkState={{ phone_number:phone_number }}
              onClick={phone_number === "" ? formik.handleSubmit : ()=> axios
              .request({
                method: "GET",

                url: `${IPServer}/Auth/signup/phone_number=${phone_number}/`,
              })
              .then((res) => {
                console.log(res.data);
                navigate('/SignUpPage2',{state:{phone_number}})
              })}
              // onClick={formik.handleSubmit}
              
       
            />
          </Box>
          </Grid>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default VerifyNumber;
