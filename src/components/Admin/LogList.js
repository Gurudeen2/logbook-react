import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../UI/Card";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

const LogList = () => {
  const dummy_data = [
    {
      name: "Fatai AKeem",
      state: "Osun State",
      mobilenumber: "080636412",
      nextofkin: "Oyetunji Yusuf",
      nextnumber: "08142392527",
      description: "signin",
      signdate: "03-03-2023",
    },
    {
      name: "Fatai Akeem",
      state: "Osun State",
      mobilenumber: "08063641230",
      nextofkin: "Oyetunji Yusuf",
      nextnumber: "08142392527",
      description: "signout",
      signdate: "04-03-2023",
    },
  ];
  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "mobilenumber",
      text: "Mobile Number",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "nextofkin",
      text: "Next of Kin",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "nextnumber",
      text: "Kin's Mobile Number",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "description",
      text: "Description",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "signdate",
      text: "Sign Date",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
  ];
  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  return (
    <Card>
      <h3>Log List</h3>
      <BootstrapTable
        striped
        bootstrap4
        keyField="id"
        data={dummy_data}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory({
          showTotal: true,
          sizePerPage: 5,
          sizePerPageList: [5, 10, 15],
        })}
      />
    </Card>
  );
};

export default LogList;
