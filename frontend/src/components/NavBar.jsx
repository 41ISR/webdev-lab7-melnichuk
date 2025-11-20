import { Link } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"


const NavBar = () => {
    const {session} = useUserStore()
    
    return (
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="brand">Feedback</h2>
                <ul className="navbar-nav">
                    <li><Link to={'/'}>Home sweet home</Link></li>
                    {!session ? (
                        <li>
                            <Link to={'/signin'}>Sign in</Link>
                        </li>
                    ):(
                        <li>
                            <Link to={'/logout'}>Log out</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavBar