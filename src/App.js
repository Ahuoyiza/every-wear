import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"

import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/ShopPage";
import LoginAndRegister from "./pages/login-and-register/login-and-register";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/UserActions";

import "./App.css";

class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
      }

      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={LoginAndRegister} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToprops = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToprops )(App);
