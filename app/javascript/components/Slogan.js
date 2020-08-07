import React from "react";
import styles from "../components/css/app.module.css";
import { Form, Button, Jumbotron, Container, Col, Row } from "react-bootstrap";

class Slogan extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, first_name, last_name, email, slogan) {
    console.log(first_name, last_name, email, slogan);
    let data = JSON.stringify({
      slogan_submission: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        slogan: slogan,
      },
    });

    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    fetch("/api/v1/slogan_submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf,
      },
      body: data,
    }).then((response) => {
      return response.json();
    });
  }

  render() {
    let formFields = {};
    return (
      <div>
        <Container fluid>
          <Row
            className="justify-content-center align-items-center"
            id={styles.page_header}
          >
            <h2>Contest</h2>
          </Row>
        </Container>
        <Jumbotron fluid className={styles.home_background}>
          <Container>
            <div className={styles.form}>
              <Row>
                <Col>
                  <Form
                    className="m-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.handleSubmit(
                        event,
                        formFields.first_name.value,
                        formFields.last_name.value,
                        formFields.email.value,
                        formFields.slogan.value
                      );
                      e.target.reset();
                    }}
                  >
                    <Form.Group>
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        ref={(input) => (formFields.first_name = input)}
                        type="text"
                        placeholder="e.g. Alex"
                        required
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        ref={(input) => (formFields.last_name = input)}
                        type="text"
                        placeholder="e.g. Smith"
                        required
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        ref={(input) => (formFields.email = input)}
                        type="email"
                        placeholder="e.g. alex.smith@email.com"
                        required
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Your slogan idea</Form.Label>
                      <Form.Control
                        ref={(input) => (formFields.slogan = input)}
                        type="text"
                        placeholder="e.g. older but boulder"
                        maxLength="50"
                        required
                      />
                      <Form.Text>Maxiumum 50 characters</Form.Text>
                    </Form.Group>

                    <Button className={styles.form_button} type="submit">
                      Send →
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Slogan;
