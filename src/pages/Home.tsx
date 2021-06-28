import React, { useState } from "react";
import "./Home.scss";
import Input from "../components/Input/Input";
import config from "../config";
import Button from "../components/Button/Button";
import KahootLogic from "../logic/Kahoot";

const Home: React.FC = () => {
  const [pin, setPin] = useState<number>(1234567);
  const [amount, setAmount] = useState<number>(1);

  return (
    <div className="home">
      <h1 className="home__title">Kahoot Hack Durio</h1>
      <div>
        The greatest <a href={`${config.kahootPlayURL}`}>Kahoot</a> Hack the
        world has ever seen.
      </div>
      <div className="home__content">
        <Input
          label={"Game Pin"}
          name="game_pin"
          placeholder="Game PIN"
          type="number"
          value={pin}
          onChange={(e) => setPin(+e.target.value)}
        />
        <Input
          label={"Bot Amount"}
          name="bot_amount"
          placeholder="Bot Amount"
          type="number"
          value={amount}
          onChange={(e) =>
            setAmount(
              +e.target.value > config.maxBotAmount
                ? config.maxBotAmount
                : +e.target.value
            )
          }
          max={config.maxBotAmount}
          min={1}
        />
        <Button
          text="FLOOD!"
          onClick={() => {
            (async () => {
              await KahootLogic.flood(pin, amount);
            })();
          }}
        />
      </div>
    </div>
  );
};

export default Home;
