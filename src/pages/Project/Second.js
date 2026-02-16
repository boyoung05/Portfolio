import React from "react";
import ProjectYearSlider from "../../component/ProjectYearSlider";
import { projects2025 } from "../../data/ProjectsFile";

const Second = () => {
    return(
        <div className="project-page">
            <ProjectYearSlider year="2025" projects={projects2025} />
        </div>
    )
}

export default Second;