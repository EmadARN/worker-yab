import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import {
  Button1,
  EmailIconSX,
  FotterGrid,
  Grid1,
  Grid2,
  Grid4,
  ItemGrid,
  ItemText,
  KeyboardArrowRightIconSX,
  KeyboardArrowRightIconSx,
  LocationOnIconSx,
  Typ2,
  Typography3,
  coloumnGrid,
} from "./style";

export const Footer = (props) => {
  return (
    <>
      <FotterGrid>
        <Grid container sx={Grid1(props)}>
          {/* useful pages */}
          <Grid
            textAlign="center"
            item
            xs={12}
            sm={6}
            md={2}
            style={coloumnGrid}
          >
            <Grid sx={{}}>
              <Typography sx={Typ2} variant="h5">
                دسترسی سریع
              </Typography>

              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon sx={KeyboardArrowRightIconSX} />
                </Box>
                <Box>
                  <Link to={"/About"}>
                    <Button sx={Button1} style={ItemText}>
                      {props.page1}
                    </Button>
                  </Link>
                </Box>
              </Grid>

              <Grid style={ItemGrid} sx={Grid2}>
                <Box>
                  <KeyboardArrowRightIcon sx={KeyboardArrowRightIconSx} />
                </Box>
                <Box>
                  <Link to={"/ServicesPage"}>
                    <Button sx={Button1} style={ItemText}>
                      {props.page3}
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* services */}
          <Grid item xs={12} sm={6} md={2} style={coloumnGrid}>
            <Grid>
              <Typography color="#cc902F" variant="h5">
                خدمات قابل ارائه
              </Typography>

              <Grid textAlign="center" style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon sx={Button1} />
                </Box>
                <Box>
                  <Link to={"/ServicesPage"}>
                    <Button sx={Button1} style={ItemText}>
                      خدمات منزل
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon sx={Button1} />
                </Box>
                <Box>
                  <Link to={"/ServicesPage"} style={{ textDecoration: "none" }}>
                    <Button sx={Button1} style={ItemText}>
                      خدمات ساختمانی
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Typography sx={Typography3} style={ItemText}>
                  منتظر سایر خدمات ما باشید
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* addreses */}
          <Grid
            textAlign="center"
            item
            xs={12}
            sm={6}
            md={2}
            style={coloumnGrid}
            sx={{ mr: { xs: 0, md: 5 } }}
          >
            <Grid>
              <Typography color="#cc902F" variant="h5">
                راه های ارتباطی با ما
              </Typography>

              <Grid style={ItemGrid}>
                <Box>
                  <LocationOnIcon sx={LocationOnIconSx} />
                </Box>
                <Box>
                  <Button sx={Typography3} style={ItemText}>
                    {props.address}
                  </Button>
                </Box>
              </Grid>
              <Grid ml={{ xs: "28%", md: "32%" }} style={ItemGrid}>
                <Box>
                  <PhoneIcon sx={LocationOnIconSx} />
                </Box>
                <Box>
                  <Button sx={Typography3} style={ItemText}>
                    {props.phNumber}
                  </Button>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Box>
                  <EmailIcon sx={EmailIconSX} />
                </Box>
                <Box>
                  <Button sx={Typography3} style={ItemText}>
                    {props.email}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid sx={Grid4}>
          <Box ml={"1%"}>
            <Typography color="#fff" variant="h5">
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
