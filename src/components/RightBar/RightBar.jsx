import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Home } from "@mui/icons-material";
import TtyIcon from "@mui/icons-material/Tty";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
const RightBar = ({ display }) => {
  const actions = [
    { icon: <FileCopyIcon />, name: "ثبت نام" },

    { icon: <PrintIcon />, name: "پرینت" },
    { icon: <ShareIcon />, name: "ارسال به دیگران" },
  ];
  const Container = styled("div")(({ theme }) => ({
    backgroundColor: "#fdbe33",
    [theme.breakpoints.down("md")]: {
      display: "inline-block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },

    paddingTop: 20,
    width: "100%",
    height: "100vh",
    color: "#efef",
    position: "sticky",
    top: "0px",
  }));
  return (
    <Container sx={{}}>
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
        to={"/ContactUs"}
        style={{
          textDecoration: "none",
          color: "#222",
          fontSize: "20px",
        }}
      >
        <Box sx={{ display: { xs: "block", sm: "flex" }, pr: 2 }}>
          <TtyIcon
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
            ارتباط با ما
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
            height: 320,
            marginTop: "200px",
            transform: "translateZ(0px)",
            flexGrow: 1,
            display: { xs: display, md: "flex" },
          }}
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "sticky", bottom: 16, right: { xs: 0, sm: 20 } }}
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
    </Container>
  );
};
export default RightBar;
