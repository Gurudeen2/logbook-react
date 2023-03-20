import React from "react";
import { Form, Row, Col, Container, Card, Button } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

const NewUserForm = (props) => {
  const { register } = useFormContext();

  return (
    <Container style={{ marginBottom: "5rem" }}>
      <h5>Add New User</h5>
      <br />

      <Card>
        <Card.Header
          style={{
            background: "#8a2b06d7",
            color: "#fff",
            fontSize: "1.2rem",
          }}
        >
          Personal Details
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Form.Group as={Row} controlId="fullname">
                <Form.Label column sm="6" className="text-left">
                  Name*
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    name="fullname"
                    style={{ height: "1.8rem" }}
                    required
                    {...register("fullname")}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter Name!
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} controlId="telNo">
                <Form.Label column sm="6" className="text-left">
                  Mobile Number*
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    name="telNo"
                    style={{ height: "1.8rem" }}
                    {...register("telno")}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter Mobile Number!
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group as={Row} controlId="state">
                <Form.Label column sm="6" className="text-left">
                  State of Origin*
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    name="state"
                    {...register("state")}
                    style={{ height: "1.8rem" }}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please State of Origin!
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group as={Row} controlId="refer">
                <Form.Label column sm="6" className="text-left">
                  Referred By*
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    name="refer"
                    {...register("refer")}
                    style={{ height: "1.8rem" }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Referred Person!
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card style={{ marginTop: "2rem" }}>
        <Card.Header
          style={{
            background: "#8a2b06d7",
            color: "#fff",
            fontSize: "1.2rem",
          }}
        >
          Next of Kin Details
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Form.Group as={Row} controlId="nextofkin">
                <Form.Label column sm="6" className="text-left">
                  Name*
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    {...register("nextofkin")}
                    name="nextofkin"
                    style={{ height: "1.8rem" }}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter name of Next of Kin!
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Row} controlId="nextofkinno">
                <Form.Label column sm="6" className="text-left">
                  Mobile Number*
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    {...register("nextofkinno")}
                    name="state"
                    style={{ height: "1.8rem" }}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Next of Kin Number!
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row style={{ marginTop: "1rem" }}>
        <Col></Col>
        <Col style={{ textAlign: "right" }}>
          <Button type="submit" variant="success" size="md">
            Save
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewUserForm;
