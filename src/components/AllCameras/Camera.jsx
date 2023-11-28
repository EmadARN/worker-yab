import { Box, Button, Grid } from "@mui/material";

import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstrants = {
  width: 540,
  facingMode: "environment",
};

const Camera = (props) => {
  const webcamRef = useRef(null);

  const [offcamera, setOffcamera] = useState(false);

  const capturePhoto = useCallback(async () => {
    const imgSrc = webcamRef.current.getScreenshot();
    setOffcamera(true);
    props.setUrl(imgSrc);
  }, [webcamRef]);

  const retryHandler = () => {
    props.setUrl(null);
    setOffcamera(false);
  };

  const onUserMedia = (e) => {};
  return (
    <>
      <Grid>
        {offcamera ? (
          props.url && (
            <Box>
              <img src={props.url} />
            </Box>
          )
        ) : (
          <Webcam
            ref={webcamRef}
            audio={true}
            screenshotFormat="image/png"
            videoConstraints={videoConstrants}
            onUserMedia={onUserMedia}
            mirrored={true}
          />
        )}
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Button
            sx={{
              mt: { xs: 5, md: 3 },

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

                bgcolor: "#fdbe33",
                color: "#030f27",
                boxShadow:
                  "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
              },
            }}
            onClick={capturePhoto}
          >
            گرفتن عکس
          </Button>
        </Box>
        <Box>
          {" "}
          {offcamera ? (
            <Button
              sx={{
                mt: { xs: 5, md: 3 },
                mx: 3,
                transition: ".5s",
                borderRadius: "2px",
                p: "10px 35px",
                color: "#fdbe33",
                fontSize: "16px",
                bgcolor: "#030f27",
                fontWeight: "700",
                fontFamily: "Lalezar",
                borderRadius: "20px 20px 20px 20px",
                "&:hover": {
                  transition: "all .75s",

                  bgcolor: "#030f27",
                  color: "#fdbe33",
                  boxShadow:
                    "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={retryHandler}
            >
              تلاش دوباره
            </Button>
          ) : null}
        </Box>
        <Box>
          {" "}
          <Button
            sx={{
              mt: { xs: 5, md: 3 },
              mr: 1,
              transition: ".5s",
              borderRadius: "2px",
              p: "10px 35px",
              color: "#030f27",
              fontSize: "16px",
              bgcolor: "rgb(226, 22, 36)",
              fontWeight: "700",
              fontFamily: "Lalezar",
              "&:hover": {
                transition: "all .5s",

                bgcolor: "rgb(226, 22, 36)",

                boxShadow:
                  "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
              },
            }}
            onClick={props.onClose}
          >
            بستن دوربین{" "}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Camera;
