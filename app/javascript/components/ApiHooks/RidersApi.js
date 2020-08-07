import { useState, useEffect } from "react";

const RidersApi = () => {
  const [riders, setRiders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("api/v1/riders")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setRiders(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return { riders, error, isLoaded };
};

export default RidersApi;
