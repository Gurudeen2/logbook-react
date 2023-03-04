import { Table } from "react-bootstrap";

const TableForm = (props) => {
  const tablebody = props.datas.map((data, index) => {
    return (
      <tr key={index}>
        <td>{index+1}</td>
        <td>{data.name}</td>
        <td>{data.mobilenumber}</td>
        <td>{data.state}</td>
        <td>{data.nextofkin}</td>
        <td>{data.nextnumber}</td>
        <td>{data.description}</td>
        <td>{data.signdate}</td>
      </tr>
    );
  });
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>State of Origin</th>
          <th>Next of Kin</th>
          <th>Kin's Mobile Number</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{tablebody}</tbody>
    </Table>
  );
};

export default TableForm;
