import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const ErrorState = () => (
  <Container>
    <Row className="text-center">
      <Col className="m-3">
        <Card>
          <Card.Header>Something went wrong.</Card.Header>
          <Card.Body>Please refresh the page and try again.</Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ErrorState;
