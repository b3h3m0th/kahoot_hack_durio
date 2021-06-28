import { sleep } from "../util/time";

const Kahoot = require("kahoot.js-updated");

export default class KahootLogic {
  public clients: Array<any> = [];

  flood(pin: number, amount: number) {
    // console.log(pin, amount);
    // let client;
    // [...new Array(amount)].forEach(async (_, i: number) => {
    //   console.log(i);
    //   client = new Kahoot();
    //   client.join(pin, i + 1);
    //   client.on("Joined", () => console.log("joined"));
    //   this.clients.push(client);
    //   await sleep(200);
    // });
    const client = new Kahoot();
    console.log(client);
    client.join(pin, "Sandro");
    console.log(client);
    client.on("Joined", () => {
      console.log("YESSSS FUCK YESS");
    });
  }
}
