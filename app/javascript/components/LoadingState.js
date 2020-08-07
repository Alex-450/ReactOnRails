import React from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";

const LoadingState = () => (
  <Container>
    <Row className="justify-content-center align-items-center m-3">
      <Button variant="warning" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
        Loading...
      </Button>
    </Row>
  </Container>
);

export default LoadingState;
