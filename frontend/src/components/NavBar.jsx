import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="brand">Feedback</h2>
                <ul className="navbar-nav">
                    <li><Link to={'/'}>Home sweet home</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar