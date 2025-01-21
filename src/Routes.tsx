import { HashRouter, Route, Routes as RouterContainer } from "react-router"
import Home from "./pages/Home"
import Threshold from "./pages/IntersectionObserver/Threshold"
import RootMargin from "./pages/IntersectionObserver/RootMargin"

export default function Routes() {
  return (
    <HashRouter>
      <RouterContainer>
        <Route path="/" element={<Home />} />
        <Route
          path="/Intersection_Observer_Threshold"
          element={<Threshold />}
        />
        <Route
          path="/Intersection_Observer_RootMargin"
          element={<RootMargin />}
        />
      </RouterContainer>
    </HashRouter>
  )
}
