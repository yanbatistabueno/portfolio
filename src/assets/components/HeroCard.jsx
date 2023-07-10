import "./HeroCard.css";
import LinksButton from "./LinksButton";
import { useTranslation } from "react-i18next";
function HeroCard() {
  const { t, i18n } = useTranslation();
  return (
    <div id="hero-container" className="hero-container">
      <div className="text-container">
        <h1>
          {t("Hi, I'm Yan!")}{" "}
          <img className="emoji-hand" src="src/home/waving-emoji.png" />
        </h1>
        <p>{t("Front-End Developer")}</p>
      </div>
      <img className="my-photo" src="src/home/my-photo.jpg" />
      <div className="links">
        <LinksButton image="src/home/html-icon.png" />
        <LinksButton image="src/home/css-icon.png" />
        <LinksButton image="src/home/js-icon.png" />
        <LinksButton image="src/home/react-icon.png" />
      </div>
    </div>
  );
}

export default HeroCard;
