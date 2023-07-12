import "./ProjectCard.css";
import LinksButton from "./LinksButton";
import { useTranslation } from "react-i18next";
function ProjectCard(props) {
  const { t, i18n } = useTranslation();
  let technologies = props.tecnology.map(function (element) {
    return (
      <LinksButton
        name={element.toUpperCase()}
        image={`src/home/${element}-icon.png`}
      />
    );
  });
  return (
    <div data-inviewport={"fade-out"} className="project-container">
      <a target="_blank" href={props.linkUrl}>
        <img
          className="project-image"
          src={`src/home/${props.projectName}.webp`}
          alt=""
        />
      </a>

      <div className="project-text">
        <h3>{props.projectName}</h3>
        <p>{t(props.desc)}</p>
        <div className="tecnology-container">{technologies}</div>
        <div>{props.git && <a href="">Github</a>} </div>
      </div>
    </div>
  );
}

export default ProjectCard;
