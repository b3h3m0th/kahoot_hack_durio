import React from "react";
import config from "../config";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="app__title">Kahoot Hack Durio</h1>
      <div>
        The greatest <a href={`${config.kahootPlayURL}`}>Kahoot</a> Hack the
        world has ever seen.
      </div>
      <div className=""></div>
    </div>
  );
};

export default Home;
