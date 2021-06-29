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
    <>
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
      <footer>
        <div className="star-info">
          Go ⭐ this project on my{" "}
          <a href={`${config.projectGithubURL}`}>Github</a> :D
        </div>
        <div className="issue-info">
          If you face any problems please open an issue on{" "}
          <a href={`${config.projectGithubURL}`}>Github</a> or contact me via{" "}
          <a href={`${config.discordURL}`}>Discord</a>{" "}
          <span
            className="issue-info__discord-tag"
            onClick={() => navigator.clipboard.writeText(config.discordTag)}
          >
            ({config.discordTag})
          </span>
        </div>
      </footer>
    </>
  );
};

export default App;
