import React, { useState, useEffect } from "react";
import TableMain from "../Table/TableMain";

import axios from "axios";
import { IPServer } from "../../Config/Server";

const AllWorker = () => {
  const [table_Row, setTable_Row] = useState([]);

  useEffect(() => {
    axios
      .request({
        method: "GET",

        url: `${IPServer}/UserInf/user/list/`,
      })
      .then((res) => {
        setTable_Row(res.data.data);
      });
  }, []);

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
