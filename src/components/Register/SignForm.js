import { useState } from "react";
import { Form, Row, Col, Container, Card, Button } from "react-bootstrap";

const SignForm = (props) => {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [nextName, setNextName] = useState("");
  const [nextNo, setNextNo] = useState("");
  const [description, setDescription] = useState("");

  const onChangeNameHandler = (e) => {
    setName(e.target.current);
  };

  const onChangeMobileHandler = (e) => {
    setMobileNo(e.target.current);
  };

  const onChangeStateHandler = (e) => {
    setState(e.target.current);
  };

  const onChangeNextNameHandler = (e) => {
    setNextName(e.target.current);
  };
  const onChangeNextNumberHandler = (e) => {
    setNextName(e.target.current);
  };
  const onChangeDescriptionHandler = (e) => {
    setDescription(e.target.current);
  };

  return (
    <Container style={{ marginBottom: "5rem" }}>
      <h5>Sign In/Out</h5>
      <br />
      <Form>
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
                <Form.Group as={Row} controlId="name">
                  <Form.Label column sm="6" className="text-left">
                    Name*
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="name"
                      style={{ height: "1.8rem" }}
                      required
                      onChange={onChangeNameHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter Name!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row} controlId="TelNo">
                  <Form.Label column sm="6" className="text-left">
                    Mobile Number*
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="TelNo"
                      style={{ height: "1.8rem" }}
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
                      style={{ height: "1.8rem" }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please State of Origin!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Col>
              <Col></Col>
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

        <Card style={{ marginTop: "2rem" }}>
          <Card.Header
            style={{
              background: "#8a2b06d7",
              color: "#fff",
              fontSize: "1.2rem",
            }}
          >
            Sign in/out Details
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form.Group as={Row} controlId="signin">
                  <Form.Label column sm="6" className="text-left">
                    Description*
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="signin"
                      placeholder="Enter Sign in or Sign out"
                      style={{ height: "1.8rem" }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter Sign In/Out!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row} controlId="signdate">
                  <Form.Label column sm="6" className="text-left">
                    Date Sign In/Out*
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="signdate"
                      style={{ height: "1.8rem" }}
                      readOnly
                      defaultValue="2023-03-03"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Sign In/Out!
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
            <Button variant="success" size="sm">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SignForm;
