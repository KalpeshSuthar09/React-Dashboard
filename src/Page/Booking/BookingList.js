/* import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BookingList(props) {
  const { booking, removeBooking } = props; // Destructure props inside the function body

  const bookingList = booking.map((val, index) => (
    <tr>
      <td>{index + 1}</td>
      <td>{val.serialNumber}</td>
      <td>{val.data.name}</td>
      <td>{val.data.email}</td>
      <td>{val.data.number}</td>
      <td>{val.data.address}</td>
      <td onClick={() => removeBooking(val.id)}>
        <DeleteIcon />
      </td>
  ));
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Order No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>{bookingList}</tbody>
      </table>
    </div>
  );
}
 */

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

export default function BookingList(props) {
  const { booking, removeBooking } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const bookingList = booking
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((val, index) => (
      <TableRow key={val.id}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{val.serialNumber}</TableCell>
        <TableCell>{val.data.name}</TableCell>
        <TableCell>{val.data.email}</TableCell>
        <TableCell>{val.data.number}</TableCell>
        <TableCell>{val.data.address}</TableCell>
        <TableCell onClick={() => removeBooking(val.id)}>
          <DeleteIcon />
        </TableCell>
      </TableRow>
    ));

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Serial No.</TableCell>
              <TableCell>Order No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Delete Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{bookingList}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={booking.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
