import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";

import React from "react";
import SignUpFinal from "../components/SignUpItems/SignUpFinal/SignUpFinal";
import { Footer } from "../components/Footer/Footer";
import CircularProgress from "@mui/material/CircularProgress";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { IPServer } from "../Config/Server";
import axios from "axios";

const SignUpPage5 = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    fontSize: "20px",
    fontWeight: "bolder",
    bgcolor: "#030f27",
    "&:hover": {
      transition: "all .75s",

      bgcolor: "#030f27",
      color: "#fdbe33",
      boxShadow:
        "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
    },
    ...(success && {
      bgcolor: "#030f27",
      color: "#fff",

      fontWeight: "bolder",
      "&:hover": { bgcolor: "#030f27" },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    axios
      .get(`${IPServer}/AddUserInf/finalization/signup/`, {
        headers: {
          Authorization: `Barear ${cookies["token"]}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
              setSuccess(true);
              setLoading(false);
              setAlert(true);
            }, 2000);
          }
        }
      })
      .catch((err) => {});
  };
  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid item xs={8} sx={{ margin: { xs: "auto", md: "0" } }}>
          <Grid container mt={6}>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Box>
                <SignUpFinal />
              </Box>

              <Container maxWidth="sm" sx={{}}>
                <Grid
                  container
                  sx={{
                    justifyContent: "center",
                    mb: { xs: 0, md: 5 },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "gray",
                      textAlign: "center",
                      fontWeight: "bold",
                      margin: "7% 0",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    }}
                  >
                    برای ثبت نهایی مشخصات خود را بررسی کرده و سپس بر روی دکمه
                    ثبت اطلاعات حساب کلیک نموده
                  </Typography>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => navigate("/SignUpPage3")}
                      variant="contained"
                      sx={{
                        mt: { xs: 5, md: 0 },
                        transition: ".5s",
                        borderRadius: "2px",
                        p: "10px 35px",
                        color: "#030f27",
                        fontSize: "16px",
                        bgcolor: "#fdbe33",
                        fontWeight: "700",
                        fontFamily: "Lalezar",
                        "&:hover": {
                          transition: "all .75s",
                          p: "10px 40px",
                          bgcolor: "#030f27",
                          color: "#fdbe33",
                          boxShadow:
                            "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                    >
                      ویرایش
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Box sx={{ m: 1, position: "relative" }}>
                        <Button
                          variant="contained"
                          sx={buttonSx}
                          disabled={loading}
                          onClick={handleButtonClick}
                        >
                          <Typography
                            sx={{
                              p: "4px 35px",
                              fontSize: { xs: "15px", md: "20px" },
                              fontWeight: { xs: "bold", md: "bolder" },

                              ...(success && {
                                opacity: 0,
                              }),
                            }}
                          >
                            {" "}
                            ثبت اطلاعات حساب
                          </Typography>
                        </Button>

                        {loading && (
                          <>
                            <CircularProgress
                              size={24}
                              sx={{
                                color: "#030f27",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                marginTop: "-12px",
                                marginLeft: "-12px",
                              }}
                            />
                          </>
                        )}
                        {success && (
                          <CheckIcon
                            sx={{
                              color: "#fdbe33",
                              position: "absolute",
                              top: "50%",
                              left: "50%",

                              marginTop: "-22px",
                              marginLeft: "-12px",
                              fontWeight: "bolder",
                              fontSize: "45px",
                            }}
                          />
                        )}
                      </Box>
                      {alert ? (
                        <Alert
                          sx={{
                            fontSize: "25px",
                            whiteSpace: "nowrap",
                            "& .MuiPaper-root": { display: "none" },
                          }}
                          severity="success"
                        >
                          اطلاعات با موفقیت ثبت شد
                        </Alert>
                      ) : null}

                      {alert
                        ? setTimeout(() => {
                            navigate("/");
                          }, 1500)
                        : null}
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>

        <Footer
          display="none"
          page1={"درباره ما"}
          page2={"ارتباط با ما"}
          page3={"خدمات"}
          services1={"خدمات مکانیکی"}
          services2={"کارگران ساختمانی"}
          address={"اعتمادیه.خیابان اول عربی"}
          phNumber={"0919123456"}
          email={"test1@gmail.com"}
        />
      </Grid>
    </>
  );
};
export default SignUpPage5;
