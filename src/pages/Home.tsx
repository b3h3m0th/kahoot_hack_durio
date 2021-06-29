import React, { useState } from "react";
import "./Home.scss";
import Input from "../components/Input/Input";
import config from "../config";
import Button from "../components/Button/Button";
import Kahoot, { FloodResult } from "../logic/Kahoot";

const Home: React.FC = () => {
  const [pin, setPin] = useState<number>(1234567);
  const [amount, setAmount] = useState<number>(1);
  const [prefix, setPrefix] = useState<string>("MyDurio");
  const [isFlooding, setIsFlodding] = useState<boolean>(false);
  const [floodResult, setFloodResult] = useState<FloodResult>(FloodResult.none);

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
        <Input
          label={"Bot Prefix"}
          name="bot_prefix"
          placeholder="Bot Prefix"
          type="text"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
        />
        <Button
          disabled={isFlooding}
          text="FLOOD!"
          onClick={() => {
            (async () => {
              setIsFlodding(true);
              await Kahoot.flood(pin, amount, prefix, setFloodResult);
              setIsFlodding(false);
            })();
          }}
        />
        <div className="home__content__notification">{floodResult}</div>
      </div>
    </div>
  );
};

export default Home;
