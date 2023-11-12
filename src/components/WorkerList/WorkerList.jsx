import React, { useState } from "react";
import TableMain from "../Table/TableMain";

const WorkerList = () => {
  const [table_Row, setTable_Row] = useState([]);
  return (
    <>
      <TableMain
        row={table_Row}
        title=" حوزه کارگر ساختمان"
        width={"200px"}
      />
    </>
  );
};

export default WorkerList;
