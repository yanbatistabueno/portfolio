import "./HeroCard.css";
import LinksButton from "./LinksButton";
import { useTranslation } from "react-i18next";
function HeroCard(props) {
  const { t, i18n } = useTranslation();
  return (
    <div
      data-inviewport={props.data}
      id="hero-container"
      className="hero-container"
    >
      <div className="text-container">
        <h1>
          {t("Hi, I'm Yan!")}{" "}
          <img className="emoji-hand" src="src/home/waving-emoji.png" />
        </h1>
        <p>{t("Front-End Developer")}</p>
      </div>
      <img className="my-photo" src="src/home/my-photo.jpg" />
      <div className="links">
        <LinksButton name="HTML" image="src/home/html-icon.png" />
        <LinksButton name="CSS" image="src/home/css-icon.png" />
        <LinksButton name="JavaScript" image="src/home/js-icon.png" />
        <LinksButton name="React" image="src/home/react-icon.png" />
      </div>
    </div>
  );
}

export default HeroCard;
