import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

import Blog from "./Screens/Blog";
import Home from "./Screens/Home";
import Rocket from "./Screens/Rocket";
import About from "./Screens/About";
import Shifter from "./Screens/Shifter";
import Header from "./Component/Header";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  // TO DO, remove the process.env when we use our custom domain
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route path={process.env.PUBLIC_URL + "/blog"} component={Blog} />
        <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Route path={process.env.PUBLIC_URL + "/rocket"} component={Rocket} />
        <Route path={process.env.PUBLIC_URL + "/shifter"} component={Shifter} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
