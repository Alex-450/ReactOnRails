import React from "react";
import styles from "./app.module.css";

function Locations() {
  var mymap = L.map("mapid").setView([51.505, -0.09], 13);

  <div className={styles.map_div} id={mapid}>
    <p>Locations to go here</p>
  </div>;
  // TODO incorporate leafletjs into React
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/-1/{x}/{y}?access_token=pk.eyJ1IjoiYWxleDQ1MCIsImEiOiJja2M5aW94cjAxbHdyMnZsbWpiOWdmemxkIn0.IW0z-IuMcB3zo1_WBCXb0A",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "your.mapbox.access.token",
    }
  ).addTo(mymap);
}

export default Locations;
