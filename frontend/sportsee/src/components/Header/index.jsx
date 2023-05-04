import Logo from "../../assets/logo.svg"
import "./header.scss"

function Header() {
  return(
    <header>
      <img src={Logo} alt="logo-sportsee" />
      <nav className="main-nav">
        <div>Accueil</div>
        <div>Profil</div>
        <div>Réglage</div>
        <div>Communauté</div>
      </nav>
    </header>
  )
}

export default Header