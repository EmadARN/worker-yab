import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, TextField } from '@mui/material';





const AdminTable = () => {

  const [clickedRow, setClickedRow] = React.useState();
const onButtonClick = (e, row) => {
  e.stopPropagation();
  setClickedRow(row);
};


const rows = [
  { id: 1, lastName: 'احمدی', firstName: 'علی', job: "کارگر" ,workExperience:20,image:""},
  { id: 2, lastName: 'حسینی', firstName: 'ممد', job: "مکانیک" ,workExperience:25,image:""},
  { id: 3, lastName: 'رضصایی', firstName: 'ساغر', job: "مکانیک" ,workExperience:40,image:""},
  { id: 4, lastName: 'خضری', firstName: 'رضا', job: "کارگز" ,workExperience:30,image:""},
  { id: 5, lastName: 'حسینی', firstName: 'جانی', job: "کارگز" ,workExperience:15,image:""},
  { id: 6, lastName: 'محمدی', firstName:" مانی", job: "کارگز",workExperience:23 ,image:""},
  { id: 7, lastName: 'صادقی', firstName: 'فریبرز', job: "مهندس" ,workExperience:45,image:""},
  { id: 8, lastName: 'سالمی', firstName: 'حسن', job: "دکتر" ,workExperience:34,image:""},
  { id: 9, lastName: 'احمدی', firstName: 'جواد', job: "کارگر" ,workExperience:23,image:""},
];




const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'نام', width: 130 ,editable:false},
  { field: 'lastName', headerName: 'نام خانوادگی', width: 130 },
  {
    field: 'job',
    headerName: 'حوزه فعالیت',
    type: 'number',
    width: 190,
   
    
  },
  {
    field: 'workExperience',
    headerName: 'سابقه کار ',
    
    sortable: false,
    width: 190,
  menubar:false
   
  },
  {
      field:"image",
      headerName:"عکس"
  },
  {
    field: "deleteButton",
    headerName: "Actions",
    description: "Actions column.",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <Button
          onClick={(e) => onButtonClick(e, params.row)}
          variant="contained"
        >
        پاک کردن
        </Button>
      );
    }
  }
];




  return (
    

 <Box sx={{height: 400, width: '70%'}}>  
      <DataGrid sx={{"& .css-t89xny-MuiDataGrid-columnHeaderTitle":{margin:"0 25px"},"& .MuiDataGrid-cellContent":{margin:"0 25px",textAlign:"center !important"}}}
      
 density='comfortable'
   
        rows={rows}
         columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
         checkboxSelection
         
      />

</Box>
    
  )
}

export default AdminTable