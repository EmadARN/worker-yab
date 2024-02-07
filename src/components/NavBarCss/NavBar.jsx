import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import BtnAnimation from "../BtnAnimation/BtnAnimation";
import { pages } from "./data";
import {
  BoxStyle1,
  BoxStyle2,
  BoxStyle4,
  BoxStyle5,
  BoxStyle6,
  BoxStyleTow,
  ButtonStyle1,
  ButtonStyle2,
  LinkStyle,
} from "./style";

function NavBar({ display }) {
  const [loadCount, setLoadCount] = React.useState(false);
  const lc = () => {
    if (window.scrollY > 10) {
      setLoadCount(true);
    } else {
      setLoadCount(false);
    }
  };
  window.addEventListener("scroll", lc);

  return (
    <Box sx={BoxStyle1}>
      {loadCount == true ? (
        <Box sx={BoxStyle2}>
          <Box>
            <Toolbar disableGutters>
              <Box sx={BoxStyleTow}>
                {pages.map((page) => (
                  <Link key={page.id} style={LinkStyle} to={page.to}>
                    <Button sx={ButtonStyle1}>{page.name}</Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Box>
          <Box sx={BoxStyle4}>
            <Link style={LinkStyle} to={"/SignupPage"}>
              <BtnAnimation
                title="ثبت نام کارجو"
                color="#fff"
                size="18px"
                fweight="700"
              />
            </Link>
          </Box>
        </Box>
      ) : (
        <Box sx={BoxStyle5}>
          <Box>
            <Toolbar disableGutters>
              <Box sx={BoxStyleTow}>
                {pages.map((page) => (
                  <Link key={page.id} style={LinkStyle} to={page.to}>
                    <Button sx={ButtonStyle2}>{page.name}</Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Box>
          <Box sx={BoxStyle6}>
            <Link style={LinkStyle} to={"/SignupPage"}>
              <BtnAnimation
                title="ثبت نام کارجو "
                color="#fff"
                size="18px"
                fweight="700"
              />
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}
export default NavBar;
