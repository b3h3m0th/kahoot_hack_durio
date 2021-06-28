import axios from "axios";
export default class KahootLogic {
  static async flood(pin: number, amount: number): Promise<any> {
    try {
      const floodResponse = await axios.post(
        `${`${process.env.REACT_APP_SERVER_URL}/flood`}`,
        {
          pin,
          amount,
        }
      );

      return floodResponse.data;
    } catch (err) {
      console.log(err);
    }
  }
}
