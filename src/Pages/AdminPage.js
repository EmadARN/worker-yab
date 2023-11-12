
import { Grid } from '@mui/material'
import React from 'react'
import AdminTable from '../components/Admintable/AdminTable'






const AdminPage = () => {
  return (
    <>
<Grid container sx={{height:"100vh",display:"flex",justifyContent:"center",alignItems:'center'}}>

<AdminTable/>

</Grid>
</>
  )
}

export default AdminPage




// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: ' firstName', headerName: 'firstName', width: 130 },
//   { field: 'نام خانوادگی', headerName: 'نام خانوادگی' , width: 130 },
//   {
//     field: 'حوزه فعالیت',
//     headerName: 'حوزه فعالیت',
    
//     width: 100,
//   },
//   {
//     field: 'سابقه کار',
//     headerName: 'سابقه کار',
   
//     sortable: false,
//     width: 160,
   
//   },
//   {
//       field:"عکس ",
//       headername:"عکس"
//   }
// ];