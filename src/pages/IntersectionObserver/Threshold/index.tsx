import IntersectionA from "./components/IntersectionA"
import IntersectionB from "./components/IntersectionB"
import IntersectionC from "./components/IntersectionC"
import "../style.css"

export default function Threshold() {
  return (
    <div>
      <div className="container">
        <div className="observer-container">
          <div className="observer-box">
            <IntersectionA />
            <IntersectionB />
            <IntersectionC />
          </div>
        </div>
      </div>
    </div>
  )
}
