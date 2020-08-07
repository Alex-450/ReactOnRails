import React from "react";
import styles from "../components/css/app.module.css";
import { Container, Row, Jumbotron, Table } from "react-bootstrap";
import ErrorState from "./ErrorState";
import LoadingState from "./LoadingState";
import RidersApi from "./ApiHooks/RidersApi";

const Riders = () => {
  const { riders, error, isLoaded } = RidersApi();
  if (error) {
    console.log(error.message);
    return <ErrorState />;
  } else if (!isLoaded) {
    return <LoadingState />;
  } else {
    return (
      <div>
        <div>
          <Container fluid>
            <Row
              className="justify-content-center align-items-center"
              id={styles.page_header}
            >
              <h2>Riders</h2>
            </Row>
          </Container>
          <Jumbotron className={styles.riders_background}>
            <Container>
              <Row className="text-center">
                <Table bordered size="sm">
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
        </div>
      </div>
    );
  }
};

export default Riders;
