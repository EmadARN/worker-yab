import { Grid } from "@mui/material";
import React from "react";
import AdminTable from "../components/Admintable/AdminTable";

const AdminPage = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*<AdminTable />*/}
      </Grid>
    </>
  );
};

export default AdminPage;


