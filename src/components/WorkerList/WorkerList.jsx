import React, { useState } from "react";

import TableClient from "../TableClient/TableClient";

const WorkerList = () => {
  const [table_Row, setTable_Row] = useState([]);
  return (
    <>
      {" "}
      <TableClient
        rows={table_Row}
        title=" حوزه کارگر ساختمان"
        width={"200px"}
      />
    </>
  );
};

export default WorkerList;
