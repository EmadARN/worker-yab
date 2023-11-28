import React, { useState } from "react";
import TableMain from "../Table/TableMain";
import TableClient from "../TableClient/TableClient";

const MechanicList = () => {
  const [table_Row, setTable_Row] = useState([]);
  return (
    <>
      <TableClient rows={table_Row} title=" حوزه مکانیک" width={"200px"} />
    </>
  );
};

export default MechanicList;
