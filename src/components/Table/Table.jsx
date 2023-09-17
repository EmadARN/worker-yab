import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

const TableInfo = ({row}) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ all: "unset" }}>
        <Table aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: "20px", fontFamily: "Lalezar" }}
                align="right"
              >
                عکس پروفایل
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontFamily: "Lalezar" }}
                align="right"
              >
                نام و نام خانوادگی
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontFamily: "Lalezar" }}
                align="right"
              >
                حوزه فعالیت
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontFamily: "Lalezar" }}
                align="right"
              >
                سابقه کار
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ width: "90px", height: "5%", marginLeft: "10px" }}
                    src={row.img}
                  />
                </TableCell>

                <TableCell align="right">
                  <Box sx={{ display: "flex", pr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {" "}
                      {row.firstName}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", pr: 1 }}>
                      {row.lastName}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold", pr: 4 }}>
                  {row.job}
                </TableCell>

                <TableCell align="right" sx={{ fontWeight: "bold", pr: 3 }}>
                  {row.workExprience}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableInfo;
