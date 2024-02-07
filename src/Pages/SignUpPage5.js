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
import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import {
  AlertSx,
  Box5,
  Button5,
  CheckIconSx,
  CircularProgressSx,
  Grid4,
  Typography5,
  Typography6,
  buttonSx,
  typography4,
} from "../styles/style";

const SignUpPage5 = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const timer = React.useRef();

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
        <Grid item xs={8} m={{ xs: "auto", md: "0" }}>
          <Grid container mt={6}>
            <Stepper1 stepID={4} />
            <Grid item xs={12} sm={12} md={12} xl={12} mt={8}>
              <Box>
                <SignUpFinal />
              </Box>

              <Container maxWidth="sm">
                <Grid container sx={Grid4}>
                  <Typography variant="h6" sx={typography4}>
                    برای ثبت نهایی مشخصات خود را بررسی کرده و سپس بر روی دکمه
                    ثبت اطلاعات حساب کلیک نموده
                  </Typography>
                  <Grid item xs={12} sm={12} md={6} sx={Typography5}>
                    <Button
                      onClick={() => navigate("/SignUpPage3")}
                      variant="contained"
                      sx={Button5}
                    >
                      ویرایش
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} sx={Typography5}>
                    <Box>
                      <Box sx={Box5}>
                        <Button
                          variant="contained"
                          sx={buttonSx(success)}
                          disabled={loading}
                          onClick={handleButtonClick}
                        >
                          <Typography sx={Typography6(success)}>
                            ثبت اطلاعات حساب
                          </Typography>
                        </Button>

                        {loading && (
                          <>
                            <CircularProgress
                              size={24}
                              sx={CircularProgressSx}
                            />
                          </>
                        )}
                        {success && <CheckIcon sx={CheckIconSx} />}
                      </Box>
                      {alert ? (
                        <Alert sx={AlertSx} severity="success">
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
          address={"اعتمادیه.خیابان اول عربی"}
          phNumber={"0919123456"}
          email={"test1@gmail.com"}
        />
      </Grid>
    </>
  );
};
export default SignUpPage5;
