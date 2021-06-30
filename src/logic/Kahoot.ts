import axios from "axios";

export enum FloodResult {
  "success" = "✔️ Bots injection requests have been sent successfully!",
  "fail" = "❌ An error occured while flooding! Check your game PIN!",
  "canceled" = "Bot injection request canceled!",
  "none" = "",
}
export default class Kahoot {
  static async flood(
    pin: number,
    amount: number,
    name: string,
    setResult: React.Dispatch<React.SetStateAction<FloodResult>>
  ): Promise<any> {
    var timeout = 10000;
    try {
      await axios.post(`${`${process.env.REACT_APP_SERVER_URL}/flood`}`, {
        pin,
        amount,
        name,
      });

      setResult(FloodResult.success);
      return setTimeout(() => setResult(FloodResult.none), timeout);
    } catch (err) {
      console.log(err);
      setResult(FloodResult.fail);
      return setTimeout(() => setResult(FloodResult.none), timeout);
    }
  }
}
