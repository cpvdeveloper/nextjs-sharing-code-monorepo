import { sayHello } from "app-1/utils";

export default (_, res) => {
  res.statusCode = 200;
  res.json({
    appName: "App 2",
    messageFromApp1: sayHello(),
  });
};
