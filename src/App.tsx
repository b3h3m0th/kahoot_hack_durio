import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import config from "./config";

// pages
import Home from "./pages/Home";

require("dotenv").config();

const pages: { [key: string]: React.FC<any> } = {
  home: Home,
};

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={`/${config._v}`} component={pages.home}></Route>
          <Route
            path={`/`}
            component={() => <Redirect to={`/${config._v}`} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
