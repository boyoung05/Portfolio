import React from "react";
import "../../styles/About.css";

const Tech = () => {
    return (
        <div className="Tech-container">
            <div className="Tech-title">Tech</div>
            <div className="Tech-entire-wrapper">
                <div className="Tech-wrapper">
                    <div className="wrapper-title">
                        Programming language
                    </div>
                    <div className="wrapper-section">
                        <div className="language-type">[HTML]</div>
                        <div className="language-type">[CSS]</div>
                        <div className="language-type">[JavaScript]</div>
                    </div>
                    <div className="wrapper-section">
                        <div className="language-type">[Python]</div>
                        <div className="language-type">[C]</div>
                        <div className="language-type">[Kotlin]</div>
                    </div>
                </div>
                <div className="Tech-wrapper">
                    <div className="wrapper-title">
                        FrameWork & Tools
                    </div>
                    <div className="wrapper-section">
                        <img
                        src={`${process.env.PUBLIC_URL}/img/Tech/github_blue.png`}
                        alt="github"
                        className="Tech-image"
                        />
                        <img
                        src={`${process.env.PUBLIC_URL}/img/Tech/figma.png`}
                        alt='figma'
                        className="Tech-image"
                        />
                        <img
                        src={`${process.env.PUBLIC_URL}/img/Tech/notion.png`}
                        alt="notion"
                        className="Tech-image"
                        />
                        <img
                        src={`${process.env.PUBLIC_URL}/img/Tech/android.png`}
                        alt="android"
                        className="Tech-image"
                        />
                        <img
                        src={`${process.env.PUBLIC_URL}/img/Tech/vscode.png`}
                        alt="vscode"
                        className="Tech-image"
                        />
                        <img
                        src={`${process.env.PUBLIC_URL}/img/Tech/react.png`}
                        alt="react"
                        className="Tech-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech;