import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import BtnAnimation from "../BtnAnimation/BtnAnimation";

const pages = [
  { id: 1, name: "خانه", to: "/" },
  { id: 3, name: "درباره ما", to: "/about" },
  { id: 3, name: "سرویس ها", to: "/service" },
  { id: 2, name: "ارتباط با ما", to: "/ContactUs" },
];

function NavBar() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          bgcolor: "#030f27",
          width: "90%",
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "#fff",
                    display: "block",
                    textTransform: "capitalize",

                    fontSize: "20px",
                    px: 4,
                  }}
                >
                  {" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    to={page.to}
                  >
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Box>
        <Box sx={{ pl: 3 }}>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "20px",
            }}
            to={"/SignupPage"}
          >
            <BtnAnimation
              title="ثبت نام"
              color="#fff"
              size="18px"
              fweight="700"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
export default NavBar;
