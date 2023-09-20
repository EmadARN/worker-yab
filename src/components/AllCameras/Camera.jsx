import { Box, Button, Grid } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstrants = {
  width: 540,
  facingMode: "environment",
};

const Camera = (props) => {
  const webcamRef = useRef(null);


  const [url, setUrl] = useState(null);


const [offcamera,setOffcamera]=useState(false)




  const capturePhoto = useCallback(async () => {
    const imgSrc = webcamRef.current.getScreenshot();
setOffcamera(true)
    setUrl(imgSrc);
  }, [webcamRef]);

const retryHandler= ()=>{
   setUrl(null)
   setOffcamera(false)

}


  const onUserMedia = (e) => {
    console.log(e);
  };
  return (
    <>
    <Grid>

      {offcamera  ? url && (<Box><img src={url} /></Box>) :   <Webcam 
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/png"
        videoConstraints={videoConstrants}
        onUserMedia={onUserMedia}
        mirrored={true}
      />}
      {/* <Webcam 
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/png"
        videoConstraints={videoConstrants}
        onUserMedia={onUserMedia}
        mirrored={true}
      /> */}
      </Grid>
      <Grid sx={{display:"flex",justifyContent:"center"}} >
      <Box><Button sx={{"&:hover":{backgroundColor:"greenyellow"},mt:"20px",backgroundColor:"green",color:'white',padding:"10px",borderRadius:"5px",fontSize:"19px",ml:"10px"}} onClick={capturePhoto}>گرفتن عکس</Button></Box>
    <Box> {offcamera ? <Button sx={{"&:hover":{backgroundColor:"orangered"},mt:"20px",backgroundColor:"red",color:'white',padding:"10px",borderRadius:"5px",fontSize:"19px",ml:"10px"}} onClick={retryHandler}>تلاش دوباره</Button>:null}</Box>
    <Box>  <Button sx={{"&:hover":{backgroundColor:"red"},mt:"20px",backgroundColor:"orangered",color:'white',padding:"10px",borderRadius:"5px",fontSize:"19px",ml:"10px"}} onClick={props.onClose}>بستن دوربین </Button></Box>
      </Grid>
      {/* {url && (
        <Box>
          <img src={url} />
        </Box>
      )} */}
    </>
  );
};

export default Camera;
