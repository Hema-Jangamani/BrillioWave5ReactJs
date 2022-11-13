
import './Header.css'
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                   <Link to="/" className="navbar-brand">Contact Manager</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/addcontact" className="nav-link">Add Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/about" className="nav-link">About US</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/news" className="nav-link">News</Link>
                            </li>
                        </ul>
                    
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                            </li>
                       
                        
                            <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default  Header;
