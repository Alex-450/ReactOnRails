import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import styles from "../components/css/app.module.css";
import { Row, Container, Col, Jumbotron } from "react-bootstrap";
import RidersApi from "./ApiHooks/RidersApi";
import ErrorState from "./ErrorState";
import LoadingState from "./LoadingState";

const Locations = () => {
  const { riders, error, isLoaded } = RidersApi();
  if (error) {
    console.log(error.message);
    return <ErrorState />;
  } else if (!isLoaded) {
    return <LoadingState />;
  } else {
    return (
      <div>
        <Container fluid>
          <Row
            className="justify-content-center align-items-center"
            id={styles.page_header}
          >
            <h2>Locations</h2>
          </Row>
        </Container>
        <Jumbotron className={styles.riders_background}>
          <Container>
            <Row>
              <Col>
                <Map center={[40.015, -105.2705]} zoom={11} id={styles.mapid}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {riders.map((rider) => (
                    <Marker key={rider.id} position={[rider.lat, rider.long]}>
                      <Popup>
                        {rider.first_name} {rider.last_name} ({rider.state})
                      </Popup>
                    </Marker>
                  ))}
                </Map>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
};

export default Locations;
