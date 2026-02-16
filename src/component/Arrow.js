import React from "react";

export const PrevArrow = ({ className="", onClick }) => {
    return (
        <button
            type="button"
            className={`project-arrow project-arrow-prev ${className}`}
            onClick={onClick}
            aria-label="previous"
        >
            <span className="arrow-img-wrap">
                <img
                    src={`${process.env.PUBLIC_URL}/img/Projects/arrow-left-gray.png`}
                    alt="prev"
                    className="arrow-img arrow-img-base"
                    draggable="false"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/img/Projects/arrow-left-blue.png`}
                    alt="prev"
                    className="arrow-img arrow-img-hover"
                    draggable="false"
                />
            </span>
        </button>
    );
};

export const NextArrow = ({ className="", onClick }) => {
    return (
        <button
            type="button"
            className={`project-arrow project-arrow-next ${className}`}
            onClick={onClick}
            aria-label="next"
        >
            <span className="arrow-img-wrap">
                <img
                    src={`${process.env.PUBLIC_URL}/img/Projects/arrow-right-gray.png`}
                    alt="prev"
                    className="arrow-img arrow-img-base"
                    draggable="false"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/img/Projects/arrow-right-blue.png`}
                    alt="prev"
                    className="arrow-img arrow-img-hover"
                    draggable="false"
                />
            </span>   
        </button>
    )
}
