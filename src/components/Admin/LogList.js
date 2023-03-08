import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../UI/Card";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig/config";
import "./LogList.css";

const LogList = () => {
  const [logList, setLogList] = useState([]);

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
  const emptyDataMessage = () => {
    return "No Data Founded";
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "logbook")).then((logdoc) => {
      const newData = logdoc.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLogList(newData);
      console.log("todos", newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Card>
      <h3>Log List</h3>
      <Form>
        <Container fluid style={{ paddingBottom: "0.3rem" }}>
          <Row style={{ textAlign: "right" }}>
            <Col></Col>
            <Col sm="3" style={{ justifyContent: "right", display: "flex" }}>
              <Form.Control
                type="text"
                name="search"
                style={{ height: "1.8rem" }}
                required
              />
              <div style={{ paddingLeft: "0.4rem" }}>
                <Button size="sm" variant="success">
                  Search
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Form>

      <BootstrapTable
        noDataIndication={emptyDataMessage}
        striped
        bootstrap4={true}
        keyField="id"
        data={logList}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory({
          showTotal: true,
          sizePerPage: 5,
          sizePerPageList: [5, 10, 15],
        })}
        wrapperClasses="table-responsive"
      />
    </Card>
  );
};

export default LogList;
