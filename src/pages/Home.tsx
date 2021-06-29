import React, { useState } from "react";
import "./Home.scss";
import Input from "../components/Input/Input";
import config from "../config";
import Button from "../components/Button/Button";
import Kahoot, { FloodResult } from "../logic/Kahoot";

import kahootLogoDistorted from "../assets/img/kahoot_logo_distorted.png";

const homeVideos = [
  "https://kahoot.com/files/2019/07/kc_1.webm",
  "https://kahoot.com/files/2019/07/kc2_2b.webm",
  "https://kahoot.com/files/2019/07/kc_3.webm",
] as const;

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
        The greatest <a href={`${config.kahootPlayURL}`}>Kahoot</a> Flooder the
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
              +e.target.value < config.maxBotAmount
                ? +e.target.value < 1
                  ? 1
                  : +e.target.value
                : config.maxBotAmount
            )
          }
          max={config.maxBotAmount}
          min={1}
        />
        <Input
          label={"Bot Name Prefix"}
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
        <div className="home__content__notification">
          {isFlooding ? "Flooding in progress..." : floodResult}
        </div>
      </div>
      <video
        className="home__video"
        autoPlay
        src={`${homeVideos[Math.floor(Math.random() * homeVideos.length)]}`}
        poster="/wp-content/themes/kahoot2017/assets/img/placeholder/illu_host2b.svg"
        loop
        playsInline
        muted
      ></video>
    </div>
  );
};

export default Home;
