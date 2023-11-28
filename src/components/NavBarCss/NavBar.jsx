import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import BtnAnimation from "../BtnAnimation/BtnAnimation";

import { useNavigate } from "react-router-dom";

const pages = [
  { id: 1, name: "خانه", to: "/" },
  { id: 3, name: "درباره ما", to: "/About" },
  { id: 3, name: "سرویس ها", to: "/ServicesPage" },

];

function NavBar({ display }) {
  const [loadCount, setLoadCount] = React.useState(false);
  function lc() {
    if (window.scrollY > 10) {
      setLoadCount(true);
    } else {
      setLoadCount(false);
    }
  }

  window.addEventListener("scroll", lc);
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      {loadCount == true ? (
        <Box
          sx={{
            bgcolor: "#030f27",
            width: "100vw",
            p: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: "0px",
            zIndex: "999",
            transition: "all 1s ",
          }}
        >
          <Box>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    key={page.id}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    to={page.to}
                  >
                    <Button
                      sx={{
                        my: 2,
                        mx: 2,
                        color: "#fff",
                        display: "block",
                        fontSize: "20px",
                        px: 4,
                        cursor: "pointer",
                        position: "relative",
                        transition: "all 1s",
                        "&:after": {
                          content: '" "',
                          width: "5px",
                          height: "5px",
                          position: "absolute",
                          border: "0px solid #fff",
                          transition: "all 1s",
                          top: "-1px",
                          left: "-1px",
                          borderTop: "2px solid #fdbe33",
                          borderLeft: "2px solid #fdbe33",
                        },
                        "&:before": {
                          content: '" "',
                          width: "5px",
                          height: "5px",
                          position: "absolute",
                          border: "0px solid #fff",
                          transition: "all 1s",
                          bottom: "-1px",
                          right: "-1px",
                          borderBottom: "2px solid #fdbe33",
                          borderRight: "2px solid #fdbe33",
                        },
                        "&:hover": {
                          "&:after": {
                            width: "70%",
                            height: " 70%",
                          },
                          "&:before": {
                            width: "70%",
                            height: " 70%",
                          },
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Box>
          <Box sx={{ pl: 3, display: "flex" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "20px",
              }}
              to={"/SignupPage"}
            >
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
        <Box
          sx={{
            bgcolor: "#030f27",
            width: "90%",
            p: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all 1s",
          }}
        >
          <Box>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    key={page.id}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    to={page.to}
                  >
                    <Button
                      sx={{
                        my: 2,
                        mx: 2,
                        color: "#fff",
                        display: "block",
                        fontSize: "20px",
                        px: 4,
                        cursor: "pointer",
                        position: "relative",
                        transition: "all 1s",
                        "&:after": {
                          content: '" "',
                          width: "5px",
                          height: "5px",
                          position: "absolute",
                          border: "0px solid #fff",
                          transition: "all 1s",
                          top: "-1px",
                          left: "-1px",
                          borderTop: "2px solid #fdbe33",
                          borderLeft: "2px solid #fdbe33",
                        },
                        "&:before": {
                          content: '" "',
                          width: "5px",
                          height: "5px",
                          position: "absolute",
                          border: "0px solid #fff",
                          transition: "all 1s",
                          bottom: "-1px",
                          right: "-1px",
                          borderBottom: "2px solid #fdbe33",
                          borderRight: "2px solid #fdbe33",
                        },
                        "&:hover": {
                          "&:after": {
                            width: "70%",
                            height: " 70%",
                          },
                          "&:before": {
                            width: "70%",
                            height: " 70%",
                          },
                        },
                      }}
                    >
                      {" "}
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Box>
          <Box sx={{ pl: 3, display: "flex", alignItems: "center" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "20px",
              }}
              to={"/SignupPage"}
            >
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
