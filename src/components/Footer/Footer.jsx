import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const FotterGrid = styled("Grid")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#030F27",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "space-around",
    
    marginTop: ".2%",
  },
}));

const coloumnGrid = {
  display: "flex",
<<<<<<< HEAD
=======
justifyContent:"center",
>>>>>>> 0f7bb122c2f90c3a832a463143836e75a4a652a6
  marginTop: "5%",
  marginBottom: "5%",
};

const ItemGrid = {
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
 
  
};

const ItemText = {
  whiteSpace: "nowrap",
};

export const Footer = (props) => {
  return (
    <>
      <FotterGrid>
        <Grid
          container
          sx={{
            display: { xs: props.display, md: "flex" },
            justifyContent: "space-evenly",
            borderBottom: "3px solid white",
            pr: { xs: 5, md: 0 },
          }}
        >
          {/* useful pages */}
          <Grid textAlign="center" item xs={12} sm={6} md={2} style={coloumnGrid}>
            <Grid sx={{}}>
              <Typography
                sx={{ color: "#CC902F", whiteSpace: "nowrap" }}
                variant="h5"
              >
                دسترسی سریع
              </Typography>

              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "white",
                      fontSize: "22px",
                      mt: 1,
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link to={"/About"} style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      {props.page1}
                    </Button>
                  </Link>
                </Box>
              </Grid>

              <Grid
                style={ItemGrid}
                sx={{ marginLeft: { xs: "5%", md: "15%" } }}
              >
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "white",
                      fontSize: "25px",
                      mt: 1,
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link to={"/ServicesPage"} style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      {props.page3}
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* services */}
          <Grid item xs={12} sm={6} md={2} style={coloumnGrid}>
            <Grid textAlign="center"  >
              <Typography sx={{ color: "#CC902F" }} variant="h5">
                {" "}
                خدمات قابل ارائه
              </Typography>

              <Grid textAlign="center" style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "white",
                      mt: 1,
                      fontSize: "22px",
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box >
                  <Link to={"/ServicesPage"} style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      خدمات منزل
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "white",
                      fontSize: "22px",
                      mt: 1,
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link to={"/ServicesPage"} style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      خدمات ساختمانی
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "17px", sm: "20px" },
                  }}
                  style={ItemText}
                >
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
              <Typography sx={{ color: "#CC902F" }} variant="h5">
                {" "}
                راه های ارتباطی با ما
              </Typography>

              <Grid style={ItemGrid}>
                <Box>
                  <LocationOnIcon
                    sx={{
                      color: "white",
                      fontSize: "22px",
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: { xs: "17px", sm: "20px" },
                    }}
                    style={ItemText}
                  >
                    {" "}
                    {props.address}
                  </Button>
                </Box>
              </Grid>
              <Grid sx={{ml:{xs:"28%",md:'32%'}}} style={ItemGrid}>
                <Box >
                  <PhoneIcon
                    sx={{
                      color: "white",
                      fontSize: "22px",
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: { xs: "17px", sm: "20px" },
                    }}
                    style={ItemText}
                  >
                    {" "}
                    {props.phNumber}
                  </Button>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Box>
                  <EmailIcon
                    sx={{
                      color: "white",
                      fontSize: "22px",
                      mt: 0.5,
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: { xs: "17px", sm: "20px" },
                    }}
                    style={ItemText}
                  >
                    {" "}
                    {props.email}
                  </Button>
                </Box>
              </Grid>
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
