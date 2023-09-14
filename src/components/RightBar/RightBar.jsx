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
const RightBar = () => {
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
    borderRadius: "0 0 8px 8px",
  }));
  return (
    <Container sx={{}}>
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
          خانه
        </Typography>
      </Box>
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
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "sticky", bottom: 16, right: { xs: 0, sm: 20 } }}
          icon={<SpeedDialIcon sx={{}} />}
          FabProps={{
            sx: {
              bgcolor: "#030f27",
              "&:hover": {
                bgcolor: "#fdbe33",
                color: "#030f27",
              },
              width: { xs: "45px", sm: "56px" },
              height: { xs: "45px", sm: "55px" },
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              sx={{
                MuiTooltip: {
                  tooltip: {
                    fontSize: "50px",
                  },
                },
              }}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </Container>
  );
};
export default RightBar;
