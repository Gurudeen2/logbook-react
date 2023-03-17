import React, { useState, useEffect, useCallback } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Card from "../UI/Card";
import ModalAlert from "../UI/ModalPopup";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig/config";

import "./LogList.css";

const LogList = () => {
  const [logList, setLogList] = useState([]);
  const [header, setHeader] = useState();
  const [content, setContent] = useState();
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };


  const hideModalHandler = () => {
    setShowModal(false);
  };

  const columns = [
    {
      dataField: "fullname",
      text: "Name",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "gender",
      text: "Gender",
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
      dataField: "nextofkinno",
      text: "Kin's Mobile Number",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "status",
      text: "Status",
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
      dataField: "fullname",
      order: "desc",
    },
  ];

  const emptyDataMessage = () => {
    return "No Data Founded";
  };

  const fetchPost = useCallback(async () => {
    await getDocs(collection(db, "logbook"))
      .then((logdoc) => {
        const newData = logdoc.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        let transData = [];
        for (let key in newData) {
          transData.push({
            id: newData[key].id,
            fullname: newData[key].logbook.fullname,
            gender: newData[key].logbook.gender,
            nextofkin: newData[key].logbook.nextofkin,
            nextofkinno: newData[key].logbook.nextofkinno,
            status: newData[key].logbook.status,
            signdate: newData[key].logbook.signdate,
            state: newData[key].logbook.state,
            mobilenumber: newData[key].logbook.mobilenumber,
          });
        }
        setLogList(transData);
      })
      .catch((err) => {
        setContent(err.message);
        setHeader("Failed");
        showModalHandler();
      });
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const searchHandler = (e) => {
    if (e.target.value.trim() !== "") {
      const filteredData = logList.filter(
        (list) =>
          list.fullname === e.target.value.trim() ||
          list.mobilenumber === e.target.value.trim()
      );

      setLogList(filteredData);
    }
  };

  return (
    <Card>
      {showModal && (
        <ModalAlert
          header={header}
          content={content}
          onClose={hideModalHandler}
        />
      )}
      <Container fluid style={{ paddingBottom: "0.3rem" }}>
        <Row style={{ textAlign: "left" }}>
          <Col sm="12" md="8" lg="9">
            <Button size="sm" variant="danger">
              Add User
            </Button>
          </Col>
          <Col
            sm="12"
            md="4"
            lg="3"
            style={{ justifyContent: "right", display: "flex" }}
          >
            <Form.Control
              type="text"
              name="search"
              onChange={searchHandler}
              style={{ height: "1.8rem" }}
              placeholder="Search By Name or Mobile Number"
              // required
            />
            <div style={{ paddingLeft: "0.4rem" }}>
              <Button size="sm" variant="success">
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

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
