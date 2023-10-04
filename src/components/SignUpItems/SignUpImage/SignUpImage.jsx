import React from "react";
import { Grid } from "@mui/material";

const SignUpImage = () => {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mt: 18 }}>
        <img
          src={
            "https://cdni.iconscout.com/illustration/premium/thumb/sign-up-6333618-5230178.png"
          }
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </>
  );
};

export default SignUpImage;
