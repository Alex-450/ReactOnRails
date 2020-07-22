import { useState, useEffect } from "react";

export const test = () => {
  const [riders, setRiders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/v1/riders.json")
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
};
