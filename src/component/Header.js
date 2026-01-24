import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <header>
        <div className="header-title">
            <Link to="/">PORTFOLIO</Link>
        </div>
        <nav className="nav-menu">
            <Link
            to="/"
            className={currentPage === "/" ? "active" : ""}
            >
            [ HOME ]
            </Link>
            <Link 
            to="/project" 
            className={currentPage === "/project" ? "active" : ""}>
            [ PROJECT ]
            </Link>
            <Link
            to="/about"
            className={currentPage === "/about" ? "active" : ""}
            >
            [ ABOUT ]
            </Link>
        </nav>
        </header>
    )

}

export default Header;