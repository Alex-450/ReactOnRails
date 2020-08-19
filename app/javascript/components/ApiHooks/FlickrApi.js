import { useState, useEffect } from "react";
import { flickrApi } from "../constants";

const FlickrApi = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

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
  }, [pageNumber]);
  return { error, isLoaded, pictures, pageNumber, setPageNumber };
};

export default FlickrApi;
