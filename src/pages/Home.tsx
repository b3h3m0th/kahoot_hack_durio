import React from "react";
import "./Home.scss";
import Input from "../components/Input/Input";
import config from "../config";
import Button from "../components/Button/Button";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="home__title">Kahoot Hack Durio</h1>
      <div>
        The greatest <a href={`${config.kahootPlayURL}`}>Kahoot</a> Hack the
        world has ever seen.
      </div>
      <div className="home__content">
        <Input name="game_pin" placeholder="Game PIN" type="number" />
        <Input name="bot_amount" placeholder="Bot Amount" type="number" />
        <Button text="FLOOD!" />
      </div>
    </div>
  );
};

export default Home;
