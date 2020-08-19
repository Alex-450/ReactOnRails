import React from "react";
import { Carousel, Button, Card } from "react-bootstrap";
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
      <Card className="text-center">
        <Carousel controls={false} interval={2000}>
          {pictures.map((pic) => (
            <Carousel.Item key={pic.id}>
              <img
                width="250px"
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
        </Carousel>
        <Card.Body>
          <Card.Title>Gallery</Card.Title>
          <Card.Text>
            See all the images uploaded to Flickr linked to the race.
          </Card.Text>
          <Button className={styles.image_button} href="/gallery">
            Full gallery →
          </Button>
        </Card.Body>
      </Card>
    );
  }
};

export default ImageCarousel;
