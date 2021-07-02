import axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export enum FloodResult {
  "success" = "✔️ Bots injection requests have been sent successfully!",
  "fail" = "❌ An error occured while flooding! Check your game PIN!",
  "canceled" = "Bot injection request canceled!",
}

export enum RejectResult {
  "success" = "✔️ Bots removed successfully!",
  "fail" = "❌ Bots could not be removed!",
}

export enum NoResult {
  none = "",
}

export default class Kahoot {
  private static _notificationDisplayTimout = 10000;

  static async getVisitorId(): Promise<string> {
    return await (
      await (await FingerprintJS.load()).get()
    ).visitorId;
  }

  static async flood(
    pin: number,
    amount: number,
    name: string,
    setResult: React.Dispatch<React.SetStateAction<any>>,
    setBotsInjected: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<NodeJS.Timeout> {
    try {
      await axios.post(`${`${process.env.REACT_APP_SERVER_URL}/flood`}`, {
        pin,
        amount,
        name,
        visitorId: await this.getVisitorId(),
      });

      setResult(FloodResult.success);
      setBotsInjected(true);

      return setTimeout(
        () => setResult(NoResult.none),
        this._notificationDisplayTimout
      );
    } catch (err) {
      console.log(err);
      setResult(FloodResult.fail);
      setBotsInjected(false);
      return setTimeout(
        () => setResult(NoResult.none),
        this._notificationDisplayTimout
      );
    }
  }

  static async reject(
    setResult: React.Dispatch<React.SetStateAction<any>>,
    setBotsInjected: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<NodeJS.Timeout> {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/reject`, {
        visitorId: await this.getVisitorId(),
      });

      setResult(RejectResult.success);
      setBotsInjected(false);

      return setTimeout(
        () => setResult(NoResult.none),
        this._notificationDisplayTimout
      );
    } catch (err) {
      console.log(err);
      setResult(RejectResult.fail);
      setBotsInjected(true);
      return setTimeout(
        () => setResult(NoResult.none),
        this._notificationDisplayTimout
      );
    }
  }
}
