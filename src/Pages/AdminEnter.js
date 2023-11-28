import React, {useState} from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import {
  Box,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import RightBar from "../components/RightBar/RightBar";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title/Title";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import BtnSignUp from "../components/SignUpItems/BtnSignUp/BtnSignUp";
import {IPServer} from "../Config/Server";
import axios from "axios";
import { CookiesProvider, useCookies } from "react-cookie";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const AdminEnter = () => {
  const navigate = useNavigate();

  const[admin,setAdmin] =useState("")
    const [cookies, setCookie] = useCookies(["adminToken"]);
  return (
    <>
      <TopBarCss />
      <Grid container height={"50vh"}>
        <Grid item>
          <RightBar display={"none"} />
        </Grid>

        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Title title="کد ورود ادمین را وارد کنید" width={"200px"} />

              <TextField
                id="standard-basic"
                onChange={(e)=>setAdmin(e.target.value)}
                label=" کد ورود"
                variant="filled"
                type="phone_number"
                sx={{
                  marginTop: "25%",
                  "& .MuiFilledInput-underline:after": {
                    borderBottomColor: "#fdbe33",
                  },

                  // width: { xs: "80%", lg: "50%", xl: "100%" },
                }}
              />

              <Box mt={5}>
                <BtnSignUp  onClick={()=>{
                    axios.post(`${IPServer}/UserInf/admin/prove/code/`, {code:admin})
                        .then((res)=>{
                            if(res.data.status ===200){
                                setCookie("adminToken", res.data.adminToken.toString());
                                 navigate('/AdminPage');

                            }else{
                                console.log("wrong code")
                            }

                        }).catch((err)=>{
                        console.log(err)
                    })
                }}/>
              </Box>
            </Grid>
          </ThemeProvider>
        </CacheProvider>
      </Grid>
    </>
  );
};

export default AdminEnter;
