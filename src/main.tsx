import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import IntersectionObserver from "./pages/IntersectionObserver"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container as HTMLElement)

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Intersection_Observer"
          element={<IntersectionObserver />}
        />
      </Routes>
    </HashRouter>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
