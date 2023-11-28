import React, { useCallback, useState } from 'react'
import Webcam from 'react-webcam'
import { useEffect } from 'react'
import  Box  from '@mui/material/Box/Box'
//component for show all available cameras in pc
const AllCAmeras = () => {

    const [device , setDevice]=useState([])

const handleDevices = useCallback(
    (mediaDevices)=>
    setDevice(mediaDevices.filter(({kind})=>kind === "videoinput")),
    [setDevice]
)

useEffect(()=>{
 navigator.mediaDevices.enumerateDevices().then(handleDevices)   
},[handleDevices])

  return (
   <>
   
{device.map((device,key)=>(
    <Box key={key}>
        <Webcam
        audio={false}
        videoConstraints={{deviceId : device.deviceId}}
        />
        {device.label || `Device ${key + 1}`}
    </Box>
))}

   </>
  )
}

export default AllCAmeras