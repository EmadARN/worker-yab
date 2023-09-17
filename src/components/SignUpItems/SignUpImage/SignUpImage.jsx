import React from 'react'
import rtlPlugin from "stylis-plugin-rtl";
import {createTheme, Grid} from "@mui/material";
import createCache from "@emotion/cache/dist/emotion-cache.cjs";
import {prefixer} from "stylis";

const theme = createTheme({
  direction: "rtl"
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const SignUpImage = () => {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <img src=".././Asset/image/Sign.jpg" />
      </Grid>
    </>
  )
}

export default SignUpImage