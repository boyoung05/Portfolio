import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/ProjectDetail.css";
import { projects2024, projects2025} from "../../data/ProjectsFile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow} from "../../component/Arrow";

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const allProjects = [...projects2024, ...projects2025];
    const project = allProjects.find((p) => p.id === id);

    if(!project) {
        return(
            <div className="project-detail">
                <h2>프로젝트를 찾을 수 없습니다.</h2>
                <button className="pd-btn" onClick={() => navigate("/project")}>
                    목록으로
                </button>
            </div>
        )
    }

    const hasLink = project.links && (project.links.github || project.links.presentation);

    return (
        <div className="project-detail">
            <div className="pd-container">

                {/*제일 상단 설명*/}
                <section className="detail-hero">
                    <div className="detail-hero-top">
                        <div>
                            <div className="detail-title">{project.title}</div>
                            <div className="detail-period">{project.period}</div>
                            <p className="detail-desc">{project.desc}</p>
                        </div>

                        <div className="detail-tags">
                        {project.stacks?.map((s) => (
                            <span key={s} className="tag">
                                {s}
                            </span>
                        ))}
                        </div>
                    </div>

                    {project.image && (
                    <div className="detail-image-wrap">
                        <img 
                            src={`${process.env.PUBLIC_URL}${project.image}`}
                            alt={project.title}
                            className="detail-img"
                        />
                    </div>
                    )}
                </section>

                {/*링크*/}
                <section className="pd-grid">
                    <div className="pd-card">
                        <div className="pd-card-title">Team</div>
                        <div className="pd-card-body">{project.team || "ㅡ"}</div>
                    </div>

                    {hasLink && (
                        <div className="pd-card">
                            <div className="pd-card-title">Links</div>
                            <div className="pd-card-body pd-links">
                                {project.links?.github && (
                                    <a 
                                        className="pd-link" 
                                        href={project.links.github} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        GitHub ↗  
                                    </a>
                                )}
                                {project.links?.presentation && (
                                    <a 
                                        className="pd-link"
                                        href={project.links.presentation}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Presentation ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </section>

                {/*overview*/}
                {(project.overview && project.overview.trim() !== "") && (
                    <section className="detail-section">
                        <h3>OverView</h3>
                        <p>{project.overview}</p>
                    </section>
                )}

                {/*Feature*/}
                {Array.isArray(project.features) && project.features.filter(Boolean).length > 0 && (
                    <section className="detail-section">
                        <h3>Key Features</h3>
                        <ul className="pd-list">
                            {project.features.filter(Boolean).map((f, idx) => (
                                <li key={idx}>{f}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/*Result*/}
                {Array.isArray(project.result) && project.result.filter(Boolean).length > 0 && (
                    <section className="detail-section">
                        <h3>Result</h3>
                        <ul className="pd-list">
                            {project.result.filter(Boolean).map((r, idx) => (
                                <li key={idx}>{r}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/*Gallery*/}
                {Array.isArray(project.gallery) && project.gallery.length > 0 && (
                    <section className="detail-section">
                        <h3>Gallery</h3>
                        <div className="pd-gallery-slider">
                            <Slider
                                dots={false}
                                infinite={project.gallery.length > 2}
                                speed={500}
                                slidesToShow={2}
                                slidesToScroll={1}
                                arrows={true}
                                adaptiveHeight={true}
                                prevArrow={<PrevArrow />}
                                nextArrow={<NextArrow />}
                                responsive={[
                                    { breakpoint: 1024, settings: { slidesToShow: 2 } }, 
                                    { breakpoint: 680, settings: { slidesToShow: 1 } },
                                ]}
                            >
                                {project.gallery.map((src, idx) => (
                                <div key={`${src}-${idx}`} className="pd-gallery-slide">
                                    <div className="pd-gallery-card">
                                    <img
                                        src={`${process.env.PUBLIC_URL}${src}`}
                                        alt={`project screenshot ${idx + 1}`}
                                        className="pd-gallery-img"
                                        loading="lazy"
                                    />
                                    </div>
                                </div>
                                ))}
                            </Slider>
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

export default ProjectDetail;