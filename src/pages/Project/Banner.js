import React from "react";
import "../../styles/Project.css";

const Banner = () => {
    return (
        <div className="Banner-container">
            <div className="Banner-wrapper">
                <div className="Banner-text-area">
                    <div className="Banner-title">Projects</div>
                    <div className="Banner-subtitle">
                        <strong>과정에서의 몰입</strong>을 통해 성장합니다.
                    </div>
                    <div className="Banner-content">
                        단순한 구현을 넘어 협업의 가치를 기록했습니다.<br/>
                        재학 기간 동안의 활동들을 소개합니다.
                    </div>
                    {/* 간단한 필터 버튼이나 스택 태그 추가 가능 */}
                    <div className="Banner-tags">
                        <span>#Frontend</span> <span>#UI/UX_Design</span> <span>#Planning</span>
                    </div>
                </div>

                {/* 우측에 아까 생성한 이미지 같은 그래픽 요소를 넣으면 좋습니다 */}
                <div className="Banner-visual-area">
                    <div className="Starfield" />
                    <div className="Visual-circle" />
                    <div className="Visual-circle small" />
                </div>
            </div>
        </div>
    );
};

export default Banner;