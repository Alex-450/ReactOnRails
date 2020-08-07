import React from "react";
import styles from "../components/css/app.module.css";
import {
  Button,
  ButtonGroup,
  Row,
  Container,
  Col,
  Image,
} from "react-bootstrap";
import ErrorState from "./ErrorState";
import LoadingState from "./LoadingState";
import FlickrApi from "./ApiHooks/FlickrApi";

const Images = () => {
  const { error, isLoaded, pictures, pageNumber, setPageNumber } = FlickrApi();

  const enablePrevButton = pageNumber > 1;

  const loadNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const loadPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };
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
            <h2>Gallery</h2>
          </Row>
          <Row>
            {pictures.map((pic) => (
              <Col key={pic.id} xs={6} md={4} className="my-2">
                <Image
                  thumbnail
                  alt="bike race"
                  src={
                    "https://farm" +
                    pic.farm +
                    ".staticflickr.com" +
                    "/" +
                    pic.server +
                    "/" +
                    pic.id +
                    "_" +
                    pic.secret +
                    ".jpg"
                  }
                ></Image>
              </Col>
            ))}
          </Row>
          <Row className="fixed-bottom mb-5 mx-auto">
            <Col className="text-center">
              <ButtonGroup size="lg">
                <Button
                  className={styles.image_button}
                  disabled={!enablePrevButton}
                  onClick={loadPrevPage}
                >
                  ←
                </Button>
                <Button className={styles.image_button}>{pageNumber}</Button>
                <Button className={styles.image_button} onClick={loadNextPage}>
                  →
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Images;
