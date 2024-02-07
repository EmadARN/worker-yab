import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import CountUp from "react-countup";
import { Box1, Box2 } from "./style";

const Fact = ({ scroll, account_number }) => {
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
                  end={account_number}
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
        <Grid xs={12} md={6} pt={{ xs: 2.8, md: 0 }}>
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
