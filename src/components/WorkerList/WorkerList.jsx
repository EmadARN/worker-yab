import React, {useEffect, useState} from "react";

import TableClient from "../TableClient/TableClient";
import axios from "axios";
import {IPServer} from "../../Config/Server";

const WorkerList = () => {
  const [table_Row, setTable_Row] = useState([]);

  useEffect(()=>{


      console.log('hello')
      axios
          .request({

              method: "GET",

              url: `${IPServer}/UserInf/user/list/`,
          })
          .then((res) => {
              setTable_Row(res.data.data);
              console.log(res.data.data)
          });


  },[])

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
