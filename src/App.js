import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
