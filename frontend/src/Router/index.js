import { Home,registerEvent } from "../Pages/index"


const routes = [
  {
    path : '/',
    Component : Home
  },
  {
    path : "/register",
    Component : registerEvent
  }
]


export { routes }
