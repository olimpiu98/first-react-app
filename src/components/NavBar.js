import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <div>

            <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" action="http://www.google.com/" method="get">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default NavBar;