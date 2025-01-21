import { useRef } from "react"
import IntersectionA from "./components/IntersectionA"
import IntersectionB from "./components/IntersectionB"
import IntersectionC from "./components/IntersectionC"
import IntersectionD from "./components/IntersectionD"
import "../style.css"

export default function RootMargin() {
  const rootRef = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div className="container">
        <div ref={rootRef} className="observer-container">
          <div className="observer-box">
            <IntersectionA ref={rootRef} />
            <IntersectionB ref={rootRef} />
            <IntersectionC ref={rootRef} />
            <IntersectionD ref={rootRef} />
          </div>
        </div>
      </div>
    </div>
  )
}
