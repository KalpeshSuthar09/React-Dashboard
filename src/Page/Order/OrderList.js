import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function OrderList(props) {
  const { order, removeOrder } = props; // Destructure props inside the function body

  const orderList = order.map((val, index) => (
    <tr>
      <td>{index + 1}</td>
      <td>{val.serialNumber}</td>
      <td>{val.data.name}</td>
      <td>{val.data.email}</td>
      <td>{val.data.number}</td>
      <td>{val.data.address}</td>
      <td onClick={() => removeOrder(val.id)}>
        <DeleteIcon />
      </td>
      {/* we add one more button in which we click on button to go direct to user profile */}
    </tr>
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
        <tbody>{orderList}</tbody>
      </table>
    </div>
  );
}
