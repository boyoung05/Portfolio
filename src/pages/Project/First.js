import React from "react";
import ProjectYearSlider from "../../component/ProjectYearSlider";
import { projects2024 } from "../../data/ProjectsFile";

const First = () => {
    return(
        <div className="project-page">
            <ProjectYearSlider year="2024" projects={projects2024} />
        </div>
    )
}

export default First;