import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import { flickrApi } from "./constants";

function Images() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

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
  }, [pageNumber]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className={styles.row}>
          {pictures.map((pic) => (
            <div className={styles.column} key={pic.id}>
              <img
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
              ></img>
            </div>
          ))}
        </div>
        {pageNumber > 1 && (
          <button onClick={loadPrevPage}>← Previous Page</button>
        )}
        <button onClick={loadNextPage}>Next Page →</button>
      </div>
    );
  }
}

export default Images;
