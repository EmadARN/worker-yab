import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import {
  ImgStyle,
  TableCellStyl3,
  TableCellStyle,
  TableContainerStyle,
} from "./style";
import { cell } from "./data";

const TableInfo = ({ row }) => {
  return (
    <>
      <TableContainer component={Paper} sx={TableContainerStyle}>
        <Table aria-label="caption table">
          <TableHead>
            <TableRow>
              {cell.map((cell) => {
                return (
                  <TableCell sx={TableCellStyle} align="right">
                    {cell.name}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={TableCellStyl3}
                  >
                    <img style={ImgStyle} src={row.profile_image} />
                  </TableCell>

                  <TableCell align="right">
                    <Box sx={{ display: "flex", pr: 2 }}>
                      <Typography fontWeight={"bold"}>
                        {row.first_name}
                      </Typography>
                      <Typography pr={1} fontWeight={"bold"}>
                        {row.last_name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", pr: 4 }}>
                    {row.job}
                  </TableCell>

                  <TableCell align="right" sx={{ fontWeight: "bold", pr: 3 }}>
                    {row.work_experience}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", pr: 3 }}>
                    {row.phone_number}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableInfo;
