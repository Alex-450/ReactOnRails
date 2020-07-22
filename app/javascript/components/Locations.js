import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import styles from "../components/css/app.module.css";
import { useState, useEffect } from "react";
import { test } from "./test";

function Locations() {
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
        <Map center={[40.015, -105.2705]} zoom={11} id={styles.mapid}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {riders.map((rider) => (
            <Marker key={rider.id} position={[rider.lat, rider.long]}>
              <Popup>
                {rider.first_name} {rider.last_name} ({rider.state})
              </Popup>
            </Marker>
          ))}
        </Map>
      </div>
    );
  }
}

export default Locations;
