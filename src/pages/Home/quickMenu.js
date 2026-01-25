import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

const QuickMenu = () => {

    const navigate = useNavigate();

    return(
        <div className="quickMenu-container">
            <div 
            className="go-to-project"
            onClick={() => navigate("/project")}
            >
                <div className="menu-project-title">
                    Projects
                </div>
                <div className="menu-project-exp">
                    대학 생활 동안 진행했던<br></br>다양한 활동들을 확인해보세요.
                </div>
                <div className="menu-project-detail">
                    <p
                     type="button"
                     onClick={(e) => {
                        e.stopPropagation(); // 카드 클릭이랑 중복 방지
                        navigate("/project");
                     }}
                     >더보기
                     </p>
                </div>
            </div>
            <div 
            className="go-to-about"
            onClick={(e) => navigate("/about")}
            >
                <div className="menu-about-title">
                    About Me
                </div>
                <div className="menu-about-exp">
                    저에 대해 더 자세히 알아보세요.
                </div>
                <div className="menu-about-detail">
                    <p
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate("/about");
                    }}
                    >더보기
                    </p>
                </div>

            </div>
        </div>
    )
}

export default QuickMenu;