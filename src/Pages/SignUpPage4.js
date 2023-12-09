import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Camera from "../components/AllCameras/Camera.jsx";
import CloseIcon from "@mui/icons-material/Close";
import TopBarCss from "../components/topbarcss/TopBarCss.js";
import RightBar from "../components/RightBar/RightBar.jsx";
import Stepper1 from "../components/SignUpItems/Stepper/Stepper.jsx";
import { IPServer } from "../Config/Server";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Footer } from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const SignUpPage4 = () => {
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["phone-number"]);

  const MainGrid = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 12px",
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [openCamera, setOpenCamera] = useState(false);

  const [url, setUrl] = useState(null);

  const [file, setFile] = useState(false);

  const [storeData, setStoreDate] = useState();

  
  const CloseIconHandle =()=>{
    setStoreDate("")
    setFile(false)
  }

  const uploadImg = () => {
    if (file === false) {
      let form_Data = new FormData();
      form_Data.append("image-camera", url);

      axios
        .post(`${IPServer}/AddUserInf/upload/image/camera/`, form_Data, {
          headers: {
            Authorization: `Barear ${cookies["token"]}`,
          },
        })
        .then((res) => {});
    } else {
      let form_Data = new FormData();
      form_Data.append("image", storeData);

      axios
        .post(`${IPServer}/AddUserInf/upload/image/`, form_Data, {
          headers: {
            Authorization: `Barear ${cookies["token"]}`,
          },
        })
        .then((res) => {});
    }

    navigate("/SignupPage5");
  };




  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid style={MainGrid} container xs={10} md={12} mb={5}>
          <Stepper1 stepID={2} />
          <Box mb={4} sx={{ mt: { xs: "7%" } }}>
            <Typography fontFamily={"Lalezar"} variant="h4">
              بارگذاری چهره متقاضی
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography
              fontFamily={"Yekan"}
              sx={{ whiteSpace: { xs: "wrap" } }}
            >
              با رعایت قوانین مشخص شده در انتهای صفحه ,از چهره تان عکس بگیرید و
              آن را بارگذاری کنید
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "4%",
              width: { xs: "90%", md: "100%" },
            }}
          >
            {openCamera ? null : (
              <img
                style={{ width: "20%" }}
                src="https://logodix.com/logo/1314431.png"
                alt=""
              />
            )}
          </Box>

          {openCamera ? (
            <Grid direction={"column"} mb={4}>
              <Camera
                url={url}
                setUrl={setUrl}
                onClose={() => {
                  setOpenCamera(false);
                }}
              />{" "}
            </Grid>
          ) : null}

          <Box mb={4}>
            <Typography
              sx={{ mb: { xs: "6%", md: "none" } }}
              fontFamily={"Lalezar"}
              variant="h5"
            >
              قوانین عکس برداری
            </Typography>
            <Typography fontFamily={"Yekan"} variant="h6">
              {" "}
              تمام رخ روبه روی دوربین بایستید و از چهره تان عکس بگیرید
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "18px", md: "20px" } }}
              fontFamily={"Yekan"}
              variant="h6"
            >
              لازم است عکستان با پس زمینه سفید و بدون عینک و کلاه و زیورالات
              باشد
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: { xs: "center" } }}>
            <>
              <Button
                sx={{
                  bgcolor: "#fdbe33",
                  color: "#030f27",
                  p: 1.8,
                  fontWeight: "bold",
                  fontSize: "15px",
                  "&:hover": {
                    bgcolor: "#fdbe33",
                    "& .iconee": {
                      color: "#030f27",
                    },
                  },
                }}
                component="label"
                variant="contained"
                disabled={openCamera}
              >
                <CloudUploadIcon
                  className="iconee"
                  sx={{
                    mx: 2,
                    color: "#030f27",
                  }}
                />
                بارگذاری عکس
                <VisuallyHiddenInput
                  onChange={(e) => {
                    return setStoreDate(e.target.files[0]), setFile(true);
                  }}
                  type="file"
                />
              </Button>
            </>

            <></>

            <Button
              sx={{
                transition: ".5s",
                p: "14px 35px",
                color: "#fdbe33",
                fontSize: "16px",
                bgcolor: "#030f27",
                fontWeight: "700",
                fontFamily: "Lalezar",
                borderRadius: "20px 0px 0px 20px",
                "&:hover": {
                  transition: "all .75s",

                  bgcolor: "#030f27",
                  color: "#fdbe33",
                },
              }}
              disabled={file}
              onClick={() => setOpenCamera(true)}
            >
              باز شدن دوربین
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: "20px",
              color: "red",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              flexDirection: "row-reverse",
              justifyContent: "flex-end",
              mt: 3,
            }}
            onClick={()=>CloseIconHandle()}
          >
            {storeData ? (
              <>
                <Typography sx={{ color: "#333" }}>
                  {" "}
                  {storeData.name}{" "}
                </Typography>
                <CloseIcon />{" "}
              </>
            ) : null}
          </Typography>

          <Box
            mt={4}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              disabled={!url && !storeData}
              onClick={uploadImg}
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
              ادامه
            </Button>
          </Box>
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

export default SignUpPage4;
