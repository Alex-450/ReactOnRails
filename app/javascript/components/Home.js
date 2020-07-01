import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CountDowntimer from "./CountdownTimer";
import Images from "./Images";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>Home page to go here</p>
        <CountDowntimer />
        <Images />

        <Footer />
      </div>
    );
  }
}

export default Home;
