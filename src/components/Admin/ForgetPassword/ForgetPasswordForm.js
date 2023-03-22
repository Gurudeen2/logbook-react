import React, { useState } from "react";
import { Col, Row, Form, Container, Button, InputGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";

const ForgetPasswordForm = (props) => {
  const { register } = useFormContext();

  const [showPass, setShowPas] = useState(false);
  const [inputName, setInputName] = useState("password");

  const [display, setDisplay] = useState(false);

  const showPasswordHandler = () => {
    if (inputName === "password") {
      setShowPas(true);
      setInputName("text");
    } else {
      setInputName("password");
      setShowPas(false);
    }
  };

  const checkInputName = (e) => {
    setInputName(e.target.type);
  };

  // if (is)// code is send enable the code input
  //after correct display password and confirm password and disable email and code input

  return (
    <Container>
      <Row>
        <Col sm="8">
          <Form.Group as={Row} controlId="email">
            <Form.Label column sm="6" className="text-left">
              Email
            </Form.Label>
            <Col sm="12">
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Account Email"
                  style={{ height: "1.8rem" }}
                  required
                  {...register("email")}
                />
                <InputGroup.Text
                  style={{
                    fontSize: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={props.onSendCode}
                >
                  Get Code
                </InputGroup.Text>
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                Please enter email!
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      {display && (
        <Row>
          <Col>
            <Form.Group as={Row} controlId="code">
              <Form.Label column sm="6" className="text-left">
                Verification Code
              </Form.Label>
              <Col sm="12">
                <Form.Control
                  type="code"
                  name="code"
                  placeholder="Enter Verification code"
                  style={{ height: "1.8rem" }}
                  required
                  {...register("code")}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter code!
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      )}

      {display && (
        <Row>
          <Col>
            <Form.Group as={Row} controlId="password">
              <Form.Label column sm="6" className="text-left">
                Password
              </Form.Label>
              <Col sm="12">
                <InputGroup className="mb-3">
                  <Form.Control
                    type={inputName}
                    name="password"
                    onChange={checkInputName}
                    style={{ height: "1.8rem" }}
                    required
                    {...register("password")}
                  />
                  <InputGroup.Text onClick={showPasswordHandler}>
                    {showPass ? <EyeFill /> : <EyeSlashFill />}
                  </InputGroup.Text>
                </InputGroup>

                <Form.Control.Feedback type="invalid">
                  Please enter Password!
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      )}
      <Row style={{ paddingTop: "0.4rem" }}>
        <Col>
          <Button variant="success" type="submit">
            Change Password
          </Button>
        </Col>
        <Col sm="6"></Col>
      </Row>
    </Container>
  );
};
export default ForgetPasswordForm;

// emailjs.send("service_bhj0dj9", "template_4266rip", {
//   from_name: "MCAN Lodge",
//   to_name: "tolani",
//   message: "plas",
// });
