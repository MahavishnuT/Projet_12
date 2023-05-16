import Logo from "../../assets/logo.svg"
import "./header.scss"
import { Link } from "react-router-dom"

function Header() {
  return(
    <header>
      <img src={Logo} alt="logo-sportsee" />
      <nav className="main-nav">
        <Link to="/">Accueil</Link>
        <div>Profil</div>
        <div>Réglage</div>
        <div>Communauté</div>
      </nav>
    </header>
  )
}

export default Header