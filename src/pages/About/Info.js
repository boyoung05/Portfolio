import React from "react";
import "../../styles/About.css";

const Info = () => {
    return(
        <div className="Info-container">
            < div className="Info-leftWrap">
                <div className="Info-logo3d">
                    <img
                    src={`${process.env.PUBLIC_URL}/img/About/kau_logo.png`}
                    alt="kau-logo-fromt"
                    className="Info-logoFace Info-logoFront"
                    draggable="false"
                    />
                    <img
                    src={`${process.env.PUBLIC_URL}/img/About/kau_logo.png`}
                    alt="kau-logo-back"
                    className="Info-logoFace Info-logoBack"
                    draggable="false"
                    />
                </div>
            </div>
            <div className="Info-right">
                <div className="Info-wrapper">
                    <div className="Info-title">Nam Bo Young</div>
                    <div className="Info-birth">[2005.12.22]</div>
                </div>
                <div className="Info-wrapper">
                    <div className="Info-major">[소프트웨어학과 24학번]</div>
                    <div className="Info-play">[Frontend]</div>
                </div>
                <div className="Info-wrapper">
                    <img 
                    src={`${process.env.PUBLIC_URL}/img/About/phone.png`}
                    alt="phone-number"
                    className="Info-phone"
                    />
                    <div className="Info-number">010-6771-8780</div>
                </div>
                <div className="Info-wrapper">
                    <img 
                    src={`${process.env.PUBLIC_URL}/img/About/mail.png`}
                    alt="email"
                    className="Info-mail"
                    />
                    <div className="Info-naver">boyoung0512@naver.com</div>
                </div>
                <div className="Info-wrapper">
                    <img
                    src={`${process.env.PUBLIC_URL}/img/About/github_white.png`}
                    alt="github"
                    className="Info-github"
                    />
                    <a 
                    href="https://github.com/boyoung05"
                    className="Info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Go to Github"
                    >
                        https://github.com/boyoung05
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Info;