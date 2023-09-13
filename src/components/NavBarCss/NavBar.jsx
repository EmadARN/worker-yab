import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="#333"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "#fff",
                  display: "block",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  fontSize: "20px",
                  px: 4,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
}
export default NavBar;
