import React from "react";
import Slider from "react-slick";
import { useNavigate} from "react-router-dom";
import { PrevArrow, NextArrow} from "./Arrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Project.css";

const ProjectYearSlider = ({ year, projects}) => {
    const navigate = useNavigate();

    const settings = {
        dots: false,
        infinite: projects.length > 2,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 900, settings: {slidesToShow: 1}},
        ]
    }

    return (
        <section className="year-section">
            <div className="year-title">{year}</div>
            <hr className="bottom-line"></hr>
            <div className="year-slider-wrap">
                <Slider {...settings}>
                    {projects.map((p) => (
                        <div key={p.id} className="slide-item">
                            <div
                            className="first-card clickable"
                            role="button"
                            tabIndex={0}
                            onClick={() => navigate(`/project/${p.id}`)}
                            onKeyDown={(e) => e.key === "Enter" && navigate(`/project/${p.id}`)}
                            >
                                <div className="card-image-wrap">
                                    <img
                                        src={`${process.env.PUBLIC_URL}${p.image}`}
                                        alt={p.title}
                                        className="card-image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-date">[{p.period}]</div>
                                <div className="card-title">[{p.title}]</div>
                                <div className="card-content">{p.desc}</div>

                                <div className="card-tech-stack">
                                {p.stacks.map((s) => (
                                    <span key={s}>[{s}]</span>
                                ))}   
                            </div>
                            <div className="card-bottom">
                                <div className="card-detail">자세히 보기</div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/Projects/long-arrow.png`}
                                    alt="arrow"
                                    className="detail-arrow"
                                />
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default ProjectYearSlider;
