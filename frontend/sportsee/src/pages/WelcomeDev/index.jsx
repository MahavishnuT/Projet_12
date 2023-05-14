import { Link } from 'react-router-dom'

function WelcomeDev() {
  return (
    <div className="links-container">
      <Link to={'/12'}>
        <button>Aller vers userId 12</button>
      </Link>
      <Link to={'/18'}>
        <button>Aller vers userId 18</button>
      </Link>
    </div>
  )
}

export default WelcomeDev
