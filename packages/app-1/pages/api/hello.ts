import { sayHello } from 'app-2/utils'

export default (_, res) => {
  res.statusCode = 200
  res.json({
    appName: 'App 1',
    messageFromApp1: sayHello()
  })
}
