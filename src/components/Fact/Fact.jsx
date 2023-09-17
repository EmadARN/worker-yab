import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import CountUp from "react-countup";
const Box1 = styled("div")(({ theme }) => ({
  backgroundColor: "#fdbe33",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "140%",
}));
const Box2 = styled("div")(({ theme }) => ({
  backgroundColor: " #030f27",
  color: "#fdbe33",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "140%",
}));

const Fact = ({ scroll }) => {
  const [loadCount, setLoadCount] = useState(false);
  function lc() {
    if (window.scrollY > scroll) {
      setLoadCount(true);
    } else {
      setLoadCount(false);
    }
  }

  window.addEventListener("scroll", lc);

  return (
    <>
      <Grid container>
        <Grid xs={12} md={6}>
          <Box1>
            <EngineeringOutlinedIcon sx={{ fontSize: "55px" }} />
            <Stack sx={{ mr: 2 }}>
              {loadCount ? (
                <CountUp
                  style={{ fontFamily: "Lalezar", fontSize: "40px" }}
                  start={0}
                  end={20}
                  duration={3}
                />
              ) : (
                0
              )}
              <Typography sx={{ fontFamily: "Lalezar" }}>
                کارگران ثبت نام شده{" "}
              </Typography>
            </Stack>
          </Box1>
        </Grid>
        <Grid xs={12} md={6} sx={{ pt: { xs: 2.8, md: 0 } }}>
          <Box2>
            <PeopleOutlinedIcon sx={{ fontSize: "55px" }} />
            <Stack sx={{ mr: 2 }}>
              {loadCount ? (
                <CountUp
                  style={{ fontFamily: "Lalezar", fontSize: "40px" }}
                  start={0}
                  end={45}
                  duration={3}
                />
              ) : (
                0
              )}
              <Typography sx={{ fontFamily: "Lalezar" }}>
                تعداد بازدید از سایت
              </Typography>
            </Stack>
          </Box2>
        </Grid>
      </Grid>
    </>
  );
};

export default Fact;
