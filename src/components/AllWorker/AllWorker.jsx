import React, { useState } from "react";
import TableMain from "../Table/TableMain";
import { Box, TextField } from "@mui/material";

const AllWorker = () => {
  const [table_Row, setTable_Row] = useState([]);
  return (
    <TableMain
      row={table_Row}
      title="همه سرویس ها"
      width={"200px"}
      xsWidth={"100px"}
      display={"inline-flex"}
    />
  );
};

export default AllWorker;
