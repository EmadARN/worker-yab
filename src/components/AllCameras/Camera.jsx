import { Box, Button } from '@mui/material'
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'


const videoConstrants = {
    width:540,
    facingMode :'environment'
}

const Camera = () => {

    const webcamRef =useRef(null)
    const [url,setUrl] = useState(null)
    const [show,setShow]=useState(false)

    const capturePhoto = useCallback(async()=>{
        const imgSrc = webcamRef.current.getScreenshot()

        setUrl(imgSrc)
    },[webcamRef])

  

const onUserMedia=(e)=>{
    console.log(e);
}
  return (
<>
<Webcam
ref={webcamRef}
audio ={true}
screenshotFormat='image/png'
videoConstraints={videoConstrants}
onUserMedia={onUserMedia}
mirrored={true}
/>
<Button onClick={capturePhoto}>capture</Button>
<Button onClick={()=>setUrl(null)}>refresh</Button>

{url && (
    <Box>
        <img src={url}/>
    </Box>
)}
</>
  )
}

export default Camera