export const sleep = (time: number): Promise<any> =>
  new Promise((resolve, reject) => setTimeout(resolve, time));
