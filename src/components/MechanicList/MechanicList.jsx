import React, { useState } from "react";
import TableMain from "../Table/TableMain";

const MechanicList = () => {
  const [table_Row, setTable_Row] = useState([]);
  return (
    <>
      <TableMain row={table_Row} title=" حوزه مکانیک" width={"200px"} />
    </>
  );
};

export default MechanicList;
