import "./styles.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
    <div className="navbar">
        <div className="links">
            <Link to="/">Signup</Link>
            <Link to="/podcasts">Podcasts</Link>
            <Link to="/start-a-podcats">Start A Podcats</Link>
            <Link to="/profile">Profile</Link>
        </div>
        </div>)
}