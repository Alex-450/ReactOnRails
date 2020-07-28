import React from "react";
import styles from "../components/css/app.module.css";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Spinner, Button, Container, Row, Jumbotron } from "react-bootstrap";

function Riders() {
  const [riders, setRiders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/v1/riders.json")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setRiders(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
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
      </div>
    );
  } else {
    return (
      <Jumbotron className={styles.riders_background}>
        <Container>
          <Row>
            <Table className="riders_table" bordered>
              <caption>Riders</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider) => (
                  <tr key={rider.id}>
                    <td>
                      {rider.first_name} {rider.last_name}
                    </td>
                    <td>{rider.city}</td>
                    <td>{rider.state}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Riders;
