import swimmingLogo from "../../assets/swim.svg"
import bikingLogo from "../../assets/bike.svg"
import weightLogo from "../../assets/weight.svg"
import meditationLogo from "../../assets/meditation.svg"
import "./sidebar.scss"

function SideBar() {
  return (
    <div className="side-bar">
      <ul className="side-bar_logos">
        <li className="side-bar_logos_logo"><img src={meditationLogo} alt="meditation-logo" /></li>
        <li className="side-bar_logos_logo"><img src={swimmingLogo} alt="swimming-logo" /></li>
        <li className="side-bar_logos_logo"><img src={bikingLogo} alt="biking-logo" /></li>
        <li className="side-bar_logos_logo"><img src={weightLogo} alt="weight-logo" /></li>
      </ul>
      <span className="side-bar_copyright">Copyright, Sportsee 2020</span>
    </div>
  )
}

export default SideBar