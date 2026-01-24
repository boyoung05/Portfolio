import React from "react";
import "../styles/Footer.css";

const Footer = () => {

    const base = `${process.env.PUBLIC_URL}/img/github_gray.png`;
    const hover = `${process.env.PUBLIC_URL}/img/github_black.png`;
    return (
        <div className="footer-container">
            <div className="footer-left">
            © Korea Aerospace University Boyoung All rights reserved.
            </div>
            <div className="footer-right">
                <a
                className="github-link"
                href="https://github.com/boyoung05/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to Github"
                >
                <img 
                    src={base} 
                    data-hover={hover}
                    alt="github" 
                    className="github-base"
                    onMouseOver={(e) => (e.currentTarget.src = e.currentTarget.dataset.hover)}
                    onMouseOut={(e) => (e.currentTarget.src = base)}
                />
                </a>
                <div className="email-info">boyoung0512@naver.com</div>
            </div>
        </div>
    )
}

export default Footer;