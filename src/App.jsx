import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Home, {loader} from "./pages/Home"
import Error from "./components/Error"
import Details from "./components/Details"

// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faLocationArrow, faLocationCrosshairs, faXmark } from "@fortawesome/free-solid-svg-icons"
// adding to library icons globally
library.add(faGithub, faLinkedin, faMagnifyingGlass, faLocationArrow, faLocationCrosshairs, faXmark)



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Home />} loader={loader}>
    <Route index element={<Details/>} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


