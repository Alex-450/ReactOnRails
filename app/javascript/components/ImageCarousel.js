import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import styles from "./css/app.module.css";
import ErrorState from "./ErrorState";
import LoadingState from "./LoadingState";
import FlickrApi from "./ApiHooks/FlickrApi";

const ImageCarousel = () => {
  const { error, isLoaded, pictures } = FlickrApi();

  if (error) {
    console.log(error.message);
    return <ErrorState />;
  } else if (!isLoaded) {
    return <LoadingState />;
  } else {
    return (
      <Container fluid className="my-3">
        <Carousel controls={false} interval={2000}>
          {pictures.map((pic) => (
            <Carousel.Item key={pic.id}>
              <img
                width="100px"
                height="300px"
                className="d-block w-100"
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
              ></img>
            </Carousel.Item>
          ))}
          <Carousel.Caption>
            <Button className={styles.image_button} href="/gallery">
              Full gallery →
            </Button>
          </Carousel.Caption>
        </Carousel>
      </Container>
    );
  }
};

export default ImageCarousel;
