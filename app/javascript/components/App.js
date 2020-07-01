import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Images from "./Images";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Images} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
