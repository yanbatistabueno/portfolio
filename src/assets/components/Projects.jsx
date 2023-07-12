import timeLineData from "../timeLineData";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
function Projects() {
  const { t, i18n } = useTranslation();
  const timeLine = timeLineData.map(function (element) {
    return (
      <ProjectCard
        tecnology={element.tecnology}
        projectName={element.projectName}
        git={element.hasGit}
        linkUrl={element.link.url}
        desc={element.desc}
      />
    );
  });
  return (
    <div data-inviewport={"seeing"} className="projects" id="projects">
      <div className="project-container-text">
        <h3>{t("PORTFOLIO")}</h3>
        <h2>{t("Each project is a unique piece of development")}</h2>
      </div>
      {timeLine}
    </div>
  );
}

export default Projects;
