import React from "react";
import CountDowntimer from "./CountdownTimer";
import ImageCarousel from "./ImageCarousel";
import styles from "../components/css/app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className={styles.home_background}>
          <Container>
            <div className={styles.countdown}>
              <Row className="align-self-center">
                <Col>
                  <CountDowntimer />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <a href="/riders" className={styles.home_link}>
                  Who's competing →
                </a>
              </Row>
              <Row className="justify-content-center">
                <a href="/locations" className={styles.home_link}>
                  Where are they →
                </a>
              </Row>
            </div>
          </Container>
        </Jumbotron>
        <ImageCarousel />
      </div>
    );
  }
}

export default Home;
