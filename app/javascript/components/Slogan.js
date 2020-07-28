import React from "react";
import styles from "../components/css/app.module.css";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

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

  componentDidMount() {
    fetch("/api/v1/slogan_submissions").then((response) => {
      return response.json();
    });
  }

  render() {
    let formFields = {};
    return (
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
            placeholder="e.g. John"
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
            placeholder="e.g. john.smith@email.com"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your slogan idea</Form.Label>
          <Form.Control
            ref={(input) => (formFields.slogan = input)}
            type="text"
            placeholder="enter your slogan idea here"
            required
          />
        </Form.Group>

        <Button type="submit">Send →</Button>
      </Form>
    );
  }
}

export default Slogan;
