import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FotterGrid = styled("grid")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#030F27",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));

const coloumnGrid = {
  display: "flex",
  flexDirection: "column",
  marginTop: "5%",

  alignItems: "center",
};

const ItemGrid = {
  display: "flex",
  alignItems: "center",
};

const ItemText = {
  color: "white",
  fontSize: "25px",
  whiteSpace: "nowrap",
};

export const Footer = (props) => {
  return (
    <>
      <FotterGrid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            borderBottom: "3px solid white",
          }}
        >
          {/* useful pages */}

          <Grid xs={12} sm={6} md={2} style={coloumnGrid}>
            <Grid sx={{ mb: "4%" }}>
              <Typography
                sx={{ color: "#CC902F", whiteSpace: "nowrap" }}
                variant="h5"
              >
                صفحه های کاربردی
              </Typography>

              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{ color: "white", fontSize: "25px" }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button style={ItemText}> {props.page1}</Button>
                  </Link>
                </Box>
              </Grid>

              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{ color: "white", fontSize: "25px" }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button style={ItemText}> {props.page2}</Button>
                  </Link>
                </Box>
              </Grid>
              <Grid
                style={ItemGrid}
                sx={{ marginLeft: { xs: "5%", md: "15%" } }}
              >
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{ color: "white", fontSize: "25px" }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button style={ItemText}> {props.page3}</Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* services */}
          <Grid xs={12} sm={6} md={2} style={coloumnGrid}>
            <Grid>
              <Typography sx={{ color: "#CC902F" }} variant="h5">
                {" "}
                خدمات قابل اراعه
              </Typography>

              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{ color: "white", fontSize: "25px" }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button style={ItemText}> {props.services1}</Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{ color: "white", fontSize: "25px" }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button style={ItemText}> {props.services2}</Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Typography style={ItemText}>
                  منتظر سایر خدمات ما باشید
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* addreses */}
          <Grid
            sx={{ marginBottom: { xs: "5%", md: "0" } }}
            xs={12}
            sm={6}
            md={2}
            style={coloumnGrid}
          >
            <Typography
              sx={{
                color: "#CC902F",
                mb: { xs: "3%", md: "5%" },
                whiteSpace: "nowrap",
              }}
              variant="h5"
            >
              راه های ارتباطی با ما
            </Typography>
            <Grid
              style={ItemGrid}
              sx={{
                mb: { xs: "3%", md: "5%" },
                ml: { xs: "10%", md: "0" },
                mr: { xs: "10%", md: "25%" },
              }}
            >
              <Box sx={{}}>
                <LocationOnIcon sx={{ color: "white", fontSize: "25px" }} />
              </Box>
              <Box>
                <Typography style={ItemText}>{props.address}</Typography>
              </Box>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: "3%", md: "5%" },
                textAlign: "right",
                marginLeft: { xs: "10%", md: "0" },
              }}
            >
              <Box sx={{ marginLeft: "10px" }}>
                <PhoneIcon sx={{ color: "white", fontSize: "25px" }} />
              </Box>
              <Box>
                <Typography style={ItemText}>{props.phNumber}</Typography>
              </Box>
            </Grid>

            <Grid style={ItemGrid}>
              <Box sx={{ marginLeft: "10px" }}>
                <EmailIcon sx={{ color: "white", fontSize: "25px" }} />
              </Box>
              <Box>
                <Typography style={ItemText}>{props.email}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1% 0",
            justifyContent: "center",
          }}
        >
          <Box sx={{ marginLeft: "1%" }}>
            <Typography sx={{ color: "white" }} variant="h5">
              {" "}
              ساخته شده توسط
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" color="#EFAE30">
              آدلی کارا
            </Typography>
          </Box>
        </Grid>
      </FotterGrid>
    </>
  );
};
