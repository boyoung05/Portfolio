import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Banner.css";

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    }

    const images = [
        `${process.env.PUBLIC_URL}/img/fire.jpg`,
        `${process.env.PUBLIC_URL}/img/plane.jpg`,
        `${process.env.PUBLIC_URL}/img/rocket.jpg`,
        `${process.env.PUBLIC_URL}/img/moon.jpg`,
        `${process.env.PUBLIC_URL}/img/sight.jpg`,
        `${process.env.PUBLIC_URL}/img/sight2.jpg`,
        `${process.env.PUBLIC_URL}/img/snow.jpg`,
        `${process.env.PUBLIC_URL}/img/lion1.jpg`,
        `${process.env.PUBLIC_URL}/img/lion3.jpg`,
    ];

    return(
        <div className="banner-container">
            <div className="banner-left">
                <div className="banner-line">
                    <hr></hr>
                </div>
                <div className="banner-name">
                    Nam<br></br>Bo Young
                </div>
                <div className="banner-info">
                    한국항공대학교 재학 동안<br></br><br></br>있었던 다양한 활동과 프로젝트를 소개하는 공간입니다.
                </div>
                <div className="banner-line">
                    <hr></hr>
                </div>
            </div>
            <div className="banner-right">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key = {index} className="slide">
                                <div className="glow-card">
                                    <img 
                                    className="slide-img"
                                    src={image}
                                    alt={`slide-${index+1}`}
                                    />
                                </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Banner;