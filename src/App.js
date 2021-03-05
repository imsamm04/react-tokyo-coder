import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
import SignIn from "./Auth/pages/SignIn/SignIn";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Todos from "./pages/Todos";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCbcZMUj2r-ufphdDP8_2U69NMw4U3plO8",
  authDomain: "auth-app-97c48.firebaseapp.com",
};

const Index = () => <h2>Home</h2>;

firebase.initializeApp(config);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [test, setTest] = useState(false);

  // useEffect(() => {
  //   const unregisterAuthObserver = firebase
  //     .auth()
  //     .onAuthStateChanged(async (user) => {
  //       if (!user) {
  //         //user logout , handle something here
  //         console.log("user is not login");
  //         return;
  //       }
  //       console.log("Loged in user: ", user.displayName);
  //       const token = await user.getIdToken();
  //       console.log("Logged in user token: ", token);
  //       console.log(user);

  //       setIsSignedIn(!!user);
  //     });
  //   return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  // }, []);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          //user logout , handle something here
          console.log("user is not login");
          return;
        }
        console.log("Loged in user: ", user.displayName);
        const token = await user.getIdToken();
        console.log("Logged in user token: ", token);
        console.log(user);

        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/about">
          <Index />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/sign-in" component={SignIn}>
          <SignIn />
        </Route>
        <Route path="/todo">
          <Todos />
        </Route>
      </div>
    </Router>
  );
}

export default App;
