const Kahoot = require("kahoot.js-updated");
const Kahoot2 = require("kahoot.js-api");

export default class KahootLogic {
  public clients: Array<any> = [];
  constructor() {}

  flood(amount: number): Promise<any> {
    return new Promise((resolve, reject) => {
      [...new Array(amount)].forEach((_, i: number) => {
        this.clients.push(new Kahoot());
      });
    });
  }
}
