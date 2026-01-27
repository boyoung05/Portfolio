import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    const location = useLocation();
    const currentPage = location.pathname;

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 900);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={scrolled ? "header scrolled" : "header"}>
        <div className="header-title">
            <Link to="/" className={currentPage === "/" ? "active" : ""}>
            PORTFOLIO
            </Link>
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