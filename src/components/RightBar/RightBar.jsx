import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Home } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import SpeedDial from "@mui/material/SpeedDial";
import { Link } from "react-router-dom";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
const RightBar = ({ display, minScroll, maxScroll }) => {
  const Container = styled("div")(({ theme }) => ({
    backgroundColor: "#fdbe33",
    [theme.breakpoints.down("md")]: {
      display: "inline-block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    paddingTop: 5,
    width: "100%",

    height: "100%",
    color: "#efef",
  }));

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled < maxScroll) {
      setVisible(false);
    } else if (scrolled > minScroll) {
      setVisible(true);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <Container sx={{}}>
      <Box
        sx={{
          position: "fixed",
          top: "10%",

          display: `${visible ? "none" : "inline"}`,

          zIndex: "999",
        }}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#222",
            fontSize: "20px",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              pr: 2,
            }}
          >
            <Home
              sx={{
                color: "#030f27",
                "@media (max-width:470px)": {
                  marginBottom: "40px",
                },
                cursor: "pointer",
                mt: { xs: 0, sm: 3 },
              }}
            />

            <Typography
              sx={{
                pb: 3,
                color: "#030f27",
                pr: { xs: 0, sm: 2 },
                mt: { xs: 0, sm: 3 },
                "@media (max-width:470px)": {
                  display: "none",
                },
              }}
            >
              خانه
            </Typography>
          </Box>
        </Link>
        <Link
          to={"/About"}
          style={{
            textDecoration: "none",
            color: "#222",
            fontSize: "20px",
          }}
        >
          <Box sx={{ display: { xs: "block", sm: "flex" }, pr: 2 }}>
            <GroupsIcon
              sx={{
                color: "#030f27",
                "@media (max-width:470px)": {
                  marginBottom: "40px",
                },
                cursor: "pointer",
              }}
            />
            <Typography
              sx={{
                pb: 5,
                color: "#030f27",
                pr: { xs: 0, sm: 2 },
                "@media (max-width:470px)": {
                  display: "none",
                },
              }}
            >
              درباره ما
            </Typography>
          </Box>
        </Link>
        <Link
          to={"/ServicesPage"}
          style={{
            textDecoration: "none",
            color: "#222",
            fontSize: "20px",
          }}
        >
          <Box sx={{ display: { xs: "block", sm: "flex" }, pr: 2 }}>
            <ManageAccountsIcon
              sx={{
                color: "#030f27",
                "@media (max-width:470px)": {
                  marginBottom: "40px",
                },
                cursor: "pointer",
              }}
            />
            <Typography
              sx={{
                pb: 5,
                color: "#030f27",
                pr: { xs: 0, sm: 2 },
                "@media (max-width:470px)": {
                  display: "none",
                },
              }}
            >
              سرویس ها
            </Typography>
          </Box>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            fontSize: "20px",
          }}
          to={"/SignupPage"}
        >
          <Box
            sx={{
              display: { xs: display, md: "flex" },
              pr: 1,
            }}
          >
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              icon={<SensorOccupiedIcon />}
              FabProps={{
                sx: {
                  color: "#fdbe33",
                  bgcolor: "#030f27",
                  "&:hover": {
                    bgcolor: "#fdbe33",
                    color: "#030f27",
                  },
                  width: { xs: "45px", sm: "56px" },
                  height: { xs: "45px", sm: "55px" },
                },
              }}
            ></SpeedDial>
          </Box>
        </Link>
      </Box>
    </Container>
  );
};
export default RightBar;
