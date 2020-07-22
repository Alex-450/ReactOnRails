import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Images from "./Images";
import Riders from "./Riders";
import Locations from "./Locations";
import Slogan from "./Slogan";
import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Images} />
          <Route exact path="/riders" component={Riders} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/contest" component={Slogan} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
