import React, { useState, useEffect, useCallback, useRef } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Card from "../../UI/Card";
import ModalAlert from "../../UI/ModalPopup";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig/config";

import "./ViewMember.css";

const ViewMember = () => {
  const [viewMembers, setViewMembers] = useState([]);
  const [header, setHeader] = useState();
  const [content, setContent] = useState();
  const [showModal, setShowModal] = useState(false);
  const searchValue = useRef();
  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const columns = [
    {
      dataField: "Fullname",
      text: "Name",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "Gender",
      text: "Gender",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "State",
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
      dataField: "NextofKin",
      text: "Next of Kin",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "NextofKinNo",
      text: "Kin's Mobile Number",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "Type",
      text: "Type",
      sort: true,
      headerStyle: {
        background: "#8a2e0ac4",
        color: "#fff",
      },
    },
    {
      dataField: "Date",
      text: "Date",
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
    await getDocs(collection(db, "newmembers"))
      .then((logdoc) => {
        const newData = logdoc.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        let transData = [];
        for (let key in newData) {
          transData.push({
            id: newData[key].id,
            Date: newData[key].newmembers.Date,
            Fullname: newData[key].newmembers.Fullname,
            Gender: newData[key].newmembers.Gender,
            NextofKin: newData[key].newmembers.NextofKin,
            NextofKinNo: newData[key].newmembers.NextofKinNo,
            PPA: newData[key].newmembers.PPA,
            Refer: newData[key].newmembers.Refer,
            State: newData[key].newmembers.State,
            Telephone: newData[key].newmembers.Telephone,
            Type: newData[key].newmembers.Type,
          });
        }
        setViewMembers(transData);
      })
      .catch((err) => {
        setContent(err.message);
        setHeader("Failed");
        showModalHandler();
      });
  }, []);

  const searchHandler = useCallback(async () => {
    let transData = [];
    await getDocs(collection(db, "logbook"))
      .then((logdoc) => {
        const newData = logdoc.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
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

        if (searchValue.current.value.trim() !== "") {
          const filteredData = transData.filter(
            (member) =>
              member.Fullname === searchValue.current.value.trim() ||
              member.Telephone === searchValue.current.value.trim() ||
              member.Type === searchValue.current.value.trim()
          );

          setViewMembers(filteredData);
        } else {
          setViewMembers(transData);
        }
      })
      .catch((err) => {
        setContent(err.message);
        setHeader("Failed");
        showModalHandler();
      });
  }, []);

  const onChangeHandler = () => {
    searchHandler();
  };

  useEffect(() => {
    searchHandler();
    fetchPost();
  }, [fetchPost]);

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
              onChange={onChangeHandler}
              ref={searchValue}
              style={{ height: "1.8rem" }}
              placeholder="Search By Name or Mobile Number"
            />
            <div style={{ paddingLeft: "0.4rem" }}>
              <Button size="sm" variant="success" onCLick={searchHandler}>
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
        data={viewMembers}
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

export default ViewMember;
