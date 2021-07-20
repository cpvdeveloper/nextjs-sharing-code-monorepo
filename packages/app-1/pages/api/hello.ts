import type { NextApiRequest, NextApiResponse } from "next";
import { sayHello } from "app-2/utils";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({
    appName: "App 1",
    messageFromOtherApp: sayHello(),
  });
};
