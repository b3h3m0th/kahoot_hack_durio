export const sleep = (time: number): Promise<NodeJS.Timeout> =>
  new Promise((resolve) => setTimeout(resolve, time));
