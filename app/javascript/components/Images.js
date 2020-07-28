import React, { useEffect, useState } from "react";
import styles from "../components/css/app.module.css";
import { flickrApi } from "./constants";
import { Spinner, Button, Row, Container, Col, Image } from "react-bootstrap";

function Images() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const enablePrevButton = pageNumber > 1;

  const loadNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const loadPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    fetch(`${flickrApi}${pageNumber}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPictures(result.photos.photo);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    window.scrollTo(0, 0);
  }, [pageNumber]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
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
      </div>
    );
  } else {
    return (
      <div>
        <Container fluid>
          <Row>
            {pictures.map((pic) => (
              <Col xs={6} md={4} className="my-2">
                <Image
                  key={pic.id}
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
            <Col xs={4} className="text-center p-1">
              <Button
                className={styles.image_button}
                disabled={!enablePrevButton}
                onClick={loadPrevPage}
              >
                ←
              </Button>
            </Col>
            <Col xs={4} className="text-center p-1">
              <p className={styles.image_page_counter}>{pageNumber}</p>
            </Col>
            <Col xs={4} className="text-center p-1">
              <Button className={styles.image_button} onClick={loadNextPage}>
                →
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Images;
