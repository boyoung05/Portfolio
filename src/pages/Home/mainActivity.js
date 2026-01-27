import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

const MainActivity = () => {

    const navigate = useNavigate();

    return(
        <div className="mainactivity-container">
            <h1>Main Activity</h1>
            <div className="mainactivity-sub-container">
                <div className="mainactivity-wrapper">
                    <img
                    className="activity-quick"
                    src={`${process.env.PUBLIC_URL}/img/MainAct/map1.png`}
                    alt="map"
                    role="button"
                    onClick={() => navigate("/")}
                    />
                    <div className="wrapper-title">
                        [가치걸음]
                    </div>
                    <div className="wrapper-content">
                        기간: 2025.09.01 - 2025.12.14
                        <br></br>
                        고령자/시각장애인/지체장애인 등 보행약자를 위한 보행 내비게이션 앱 기획
                    </div>
                </div>
                <div className="mainactivity-wrapper">
                    <img
                        className="activity-quick"
                        src={`${process.env.PUBLIC_URL}/img/MainAct/shop1.png`}
                        alt="map"
                        role="button"
                        onClick={() => navigate("/")}
                    />
                    <div className="wrapper-title">
                        [Sajang Project]
                    </div>
                    <div className="wrapper-content">
                        기간: 2025.03.09 - 2025.11.20
                        <br></br>
                        나만의 쇼핑몰 웹 사이트 제작
                    </div>
                </div>
                <div className="mainactivity-wrapper">
                    <img
                        className="activity-quick"
                        src={`${process.env.PUBLIC_URL}/img/MainAct/classfit1.png`}
                        alt="map"
                        role="button"
                        onClick={() => navigate("/")}
                    />
                    <div className="wrapper-title">
                        [Class + fit]
                    </div>
                    <div className="wrapper-content">
                        기간: 2025.04 - 2025.08.26
                        <br></br>
                        AI 기반 수강신청 지원 웹 사이트 제작
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default MainActivity;