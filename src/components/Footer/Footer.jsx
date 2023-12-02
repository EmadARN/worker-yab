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
    marginTop: "4%",
  },
}));

const coloumnGrid = {
  display: "flex",

  marginTop: "5%",
  marginBottom: "5%",
  alignItems: "center",
};

const ItemGrid = {
  display: "flex",
  alignItems: "center",
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
          <Grid item xs={12} sm={6} md={2} style={coloumnGrid}>
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
                      fontSize: "25px",
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link to={"/About"}>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px", md: "25px" },
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

              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "white",
                      fontSize: "25px",
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link to={"/ContactUs"}>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px", md: "25px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      {props.page2}
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
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link to={"/ServicesPage"}>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px", md: "25px" },
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
            <Grid>
              <Typography sx={{ color: "#CC902F" }} variant="h5">
                {" "}
                خدمات قابل ارائه
              </Typography>

              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "white",
                      fontSize: "25px",
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px", md: "25px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      {props.services1}
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Box>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "white",
                      fontSize: "25px",
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px", md: "25px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      {props.services2}
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "17px", sm: "20px", md: "25px" },
                    "&:hover": {
                      mr: { xs: 1, sm: 2, md: 1 },
                      transition: "all .75s ",
                      color: "#fdbe33",
                    },
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
                      fontSize: "25px",
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px", md: "25px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      {props.address}
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Box>
                  <PhoneIcon
                    sx={{
                      color: "white",
                      fontSize: "25px",
                      "&:hover": {
                        transition: "all .75s ",
                        color: "#fdbe33",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px", md: "25px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      {props.phNumber}
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid style={ItemGrid}>
                <Box>
                  <EmailIcon
                    sx={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  />
                </Box>
                <Box>
                  <Link>
                    <Button
                      sx={{
                        color: "white",
                        fontSize: { xs: "17px", sm: "20px", md: "25px" },
                        "&:hover": {
                          mr: { xs: 1, sm: 2, md: 1 },
                          transition: "all .75s ",
                          color: "#fdbe33",
                          "& .MuiSvgIcon-root": {
                            color: "#fdbe33",
                          },
                        },
                      }}
                      style={ItemText}
                    >
                      {" "}
                      {props.email}
                    </Button>
                  </Link>
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
