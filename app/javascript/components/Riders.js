import React from "react";
import styles from "../components/css/app.module.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Riders() {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className={styles.riders_div}>
          <table className={styles.riders_table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
              </tr>

              {riders.map((rider) => (
                <tr key={rider.id}>
                  <td>
                    {rider.first_name} {rider.last_name}
                  </td>
                  <td>{rider.city}</td>
                  <td>{rider.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Riders;
