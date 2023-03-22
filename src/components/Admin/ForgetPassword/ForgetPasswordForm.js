import React from "react";
import { Col, Row, Form, Container, Button, InputGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

const ForgetPasswordForm = (props) => {
  const { register } = useFormContext();

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
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                Please enter email!
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ paddingTop: "0.4rem" }}>
        <Col>
          <Button variant="success" size="sm" type="submit">
            Reset Password
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
