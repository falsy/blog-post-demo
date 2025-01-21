import { useRef } from "react"
import "./style.css"
import IntersectionA from "./components/IntersectionA"
import IntersectionB from "./components/IntersectionB"
import IntersectionC from "./components/IntersectionC"
import IntersectionD from "./components/IntersectionD"
import IntersectionE from "./components/IntersectionE"
import IntersectionF from "./components/IntersectionF"
import IntersectionG from "./components/IntersectionG"

export default function IntersectionObserver() {
  const rootRef = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div className="container">
        <div ref={rootRef} className="observer-container">
          <div className="observer-box">
            <IntersectionA />
            <IntersectionB />
            <IntersectionC />
            <IntersectionD ref={rootRef} />
            <IntersectionE ref={rootRef} />
            <IntersectionF ref={rootRef} />
            <IntersectionG ref={rootRef} />
          </div>
        </div>
      </div>
    </div>
  )
}
