import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
// import Login from "./components/Login/Login";

function App() {
  const [resourceType, setResourceType] = useState();

  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>{resourceType}</h1>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/mern-portfolio" component={Home} /> */}
          <Route
            exact
            path="/portfolio"
            component={Portfolio}
            onClick={() => setResourceType("portfolio")}
          />
          <Route
            exact
            path="/contact"
            component={Contact}
            onClick={() => setResourceType("contact")}
          />
          <Route
            exact
            path="/"
            component={Portfolio}
            onClick={() => setResourceType("portfolio")}
          />
          <Route
            exact
            path="/home"
            component={Home}
            onClick={() => setResourceType("home")}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
