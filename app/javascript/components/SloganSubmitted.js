import React from "react";
import { Container, Toast } from "react-bootstrap";
import styles from "../components/css/app.module.css";

class SloganSubmitted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: true,
    };
  }
  toggleShowToast = () => {
    this.setState({ showToast: false });
  };
  render() {
    return (
      <div>
        <Container>
          <Toast
            show={this.state.showToast}
            onClose={this.toggleShowToast}
            className={styles.slogan_toast}
          >
            <Toast.Header>
              <strong>Thanks!</strong>
            </Toast.Header>
            <Toast.Body>
              <p>We will be in touch if your submission is successful</p>
            </Toast.Body>
          </Toast>
        </Container>
      </div>
    );
  }
}

export default SloganSubmitted;
