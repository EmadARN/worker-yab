import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const SignUpPage3 = () => {

const MainGrid={
  display:'flex',
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
 height:"100vh",
width:"100%"
}

  return (
  <>
  <Grid sx={{mt:{xs:"0",md:'6%'}}} >
<Grid  style={MainGrid} item>
<Box mb={4}><Typography fontFamily={"Lalezar"} variant='h4'>بارگذاری چهره متقاضی</Typography></Box>
<Box mb={3}><Typography fontFamily={"Yekan"} sx={{whiteSpace:{xs:'wrap'}}}>با رعایت قوانین مشخص شده در انتهای صفحه ,از چهره تان عکس بگیرید و آن را بارگذاری کنید</Typography></Box>


<Box sx={{display:"flex",alignItems:"center",backgroundColor:"#EBECF2",width:{xs:"50%",md:"30%"},padding:{xs:"3%",md:"1%"},justifyContent:"center",mb:"4%"}}>
  <Typography sx={{marginLeft:"10px",whiteSpace:{xs:"nowrap",md:"wrap"}}}  fontFamily={"Yekan"}>تصویر چهره متقاضی</Typography>
<AddAPhotoIcon/>
</Box>

<Box  sx={{display:"flex",justifyContent:"center",alignItems:"center",mb:"4%",width:{xs:"90%",md:"100%"}}}>
  <img style={{width:"20%"}}  src="https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg" alt="" />
</Box>

<Box mb={4}>
<Typography fontFamily={"Lalezar"} variant='h5'>قوانین عکس برداری</Typography>
<Typography  fontFamily={"Yekan"} variant='h6'> تمام رخ روبه روی دوربین بایستید و از چهره تان عکس بگیرید</Typography>
<Typography sx={{fontSize:{xs:"18px" ,md:"20px"}}} fontFamily={"Yekan"} variant='h6'>لازم است عکستان با پس زمینه سفید و بدون عینک و کلاه و زیورالات باشد</Typography>
</Box>

<Box>
<TextField type='file'></TextField>
</Box>


<Box mt={4} sx={{width:"100%" ,display:"flex",justifyContent:"center"}}>
<Button sx={{backgroundColor:"#01B0F1" , color:"white",borderRadius:"7px",fontSize:"20px",width:"20%",'&:hover':{backgroundColor:"#030f27"}}} >ادامه</Button>
</Box>
</Grid>
  </Grid>
  
  </>
  )
}

export default SignUpPage3