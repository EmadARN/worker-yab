import { Box, Button, Grid } from "@mui/material";

import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  Camera_Button1,
  Camera_Button2,
  Camera_Button3,
  Camera_G1,
} from "./style";

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
      <Grid sx={Camera_G1}>
        <Box>
          <Button sx={Camera_Button1} onClick={capturePhoto}>
            گرفتن عکس
          </Button>
        </Box>
        <Box>
          {" "}
          {offcamera ? (
            <Button sx={Camera_Button2} onClick={retryHandler}>
              تلاش دوباره
            </Button>
          ) : null}
        </Box>
        <Box>
          {" "}
          <Button sx={Camera_Button3} onClick={props.onClose}>
            بستن دوربین{" "}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Camera;
