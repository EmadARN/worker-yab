import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import SpeedDial from "@mui/material/SpeedDial";
import { Link } from "react-router-dom";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import {
  BoxStyle1,
  BoxStyle3,
  BoxStyleTwo,
  Container,
  FabPropsStyle,
  GroupsIconStyle,
  HomeStyle,
  LinkStyle,
  ManageAccountsIconStyle,
  TypographyStyle,
  TypographyStyle3,
  TypographyStyletwo,
} from "./style";

const RightBar = ({ display, minScroll, maxScroll }) => {
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
    <Container>
      <Box sx={BoxStyle1(visible)}>
        <Link to={"/"} style={LinkStyle}>
          <Box sx={BoxStyleTwo}>
            <Home sx={HomeStyle} />
            <Typography sx={TypographyStyle}>خانه</Typography>
          </Box>
        </Link>

        <Link to={"/About"} style={LinkStyle}>
          <Box sx={BoxStyleTwo}>
            <GroupsIcon sx={GroupsIconStyle} />
            <Typography sx={TypographyStyletwo}>درباره ما</Typography>
          </Box>
        </Link>

        <Link to={"/ServicesPage"} style={LinkStyle}>
          <Box sx={BoxStyleTwo}>
            <ManageAccountsIcon sx={ManageAccountsIconStyle} />
            <Typography sx={TypographyStyle3}>سرویس ها</Typography>
          </Box>
        </Link>

        <Link style={LinkStyle} to={"/SignupPage"}>
          <Box sx={BoxStyle3(display)}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              icon={<SensorOccupiedIcon />}
              FabProps={FabPropsStyle}
            ></SpeedDial>
          </Box>
        </Link>
      </Box>
    </Container>
  );
};
export default RightBar;
