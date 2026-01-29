import React from 'react';
import "../../styles/About.css";

const Award = () => {
    return(
        <div className="Award-container">
            <div className="Award-title">Award & Certificate</div>
            <div className="Award-entire-wrapper">
                <div className="Award-wrapper">
                    <div className="Award-line-one">
                        <div className="Award-wrapper-title">
                            [Adventure Design 2nd]
                        </div>
                        <div className="Award-date">
                            [2025.12]
                        </div>
                    </div>
                    <div className="Award-content">
                        2025 2학기 Adventure Design에서 최종 2등
                    </div>
                </div>
                <div className="Award-wrapper">
                    <div className="Award-line-one">
                        <div className="Award-wrapper-title">
                            [ADsP]
                        </div>
                        <div className="Award-date">
                            [2026.03]
                        </div>
                    </div>
                    <div className="Award-content">
                        데이터분석준전문가 자격증(개발자)
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Award;