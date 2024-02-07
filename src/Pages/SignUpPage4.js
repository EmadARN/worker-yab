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
import {
  Box1,
  Box2,
  Box4,
  Button1,
  Button2,
  Button3,
  CloudUploadIconSx,
  MainGrid,
  Typography1,
  Typography2,
  Typogrophy3,
} from "../styles/style.js";
const SignUpPage4 = () => {
  const navigate = useNavigate();

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

  const [cookies, setCookie] = useCookies(["phone-number"]);

  const [openCamera, setOpenCamera] = useState(false);

  const [url, setUrl] = useState(null);

  const [file, setFile] = useState(false);

  const [storeData, setStoreDate] = useState();

  const CloseIconHandle = () => {
    setStoreDate("");
    setFile(false);
  };

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
          <Box mb={4} mt={{ xs: "7%" }}>
            <Typography fontFamily={"Lalezar"} variant="h4">
              بارگذاری چهره متقاضی
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography fontFamily={"Yekan"} sx={Typography1}>
              با رعایت قوانین مشخص شده در انتهای صفحه ,از چهره تان عکس بگیرید و
              آن را بارگذاری کنید
            </Typography>
          </Box>

          <Box sx={Box1}>
            {openCamera ? null : (
              <img
                width={"20%"}
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
              />
            </Grid>
          ) : null}

          <Box mb={4}>
            <Typography sx={Typography2} fontFamily={"Lalezar"} variant="h5">
              قوانین عکس برداری
            </Typography>
            <Typography fontFamily={"Yekan"} variant="h6">
              تمام رخ روبه روی دوربین بایستید و از چهره تان عکس بگیرید
            </Typography>
            <Typography
              fontSize={{ xs: "18px", md: "20px" }}
              fontFamily={"Yekan"}
              variant="h6"
            >
              لازم است عکستان با پس زمینه سفید و بدون عینک و کلاه و زیورالات
              باشد
            </Typography>
          </Box>

          <Box sx={Box2}>
            <>
              <Button
                sx={Button1}
                component="label"
                variant="contained"
                disabled={openCamera}
              >
                <CloudUploadIcon className="iconee" sx={CloudUploadIconSx} />
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
              sx={Button2}
              disabled={file}
              onClick={() => setOpenCamera(true)}
            >
              باز شدن دوربین
            </Button>
          </Box>

          <Typography sx={Typogrophy3} onClick={() => CloseIconHandle()}>
            {storeData ? (
              <>
                <Typography color="#333"> {storeData.name} </Typography>
                <CloseIcon />
              </>
            ) : null}
          </Typography>

          <Box mt={4} sx={Box4}>
            <Button
              disabled={!url && !storeData}
              onClick={uploadImg}
              variant="contained"
              sx={Button3}
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
          address={"اعتمادیه.خیابان اول غربی"}
          phNumber={"0919123456"}
          email={"test1@gmail.com"}
        />
      </Grid>
    </>
  );
};

export default SignUpPage4;
