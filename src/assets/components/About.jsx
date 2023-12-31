import "./About.css";
import { Trans, useTranslation } from "react-i18next";
import "i18next";

function About() {
  const { t, i18n } = useTranslation();
  return (
    <div
      data-inviewport={"seeing"}
      id="about-container"
      className="about-container"
    >
      <img src="src/home/laptop-image.jpg" alt="" />
      <div data-inviewport={"fade-out"} className="about-container-text">
        <h3>{t("ABOUT ME")}</h3>
        <h2>
          <Trans i18nKey="about_title" components={{ nextLine: <br /> }} />
        </h2>
        <p>
          <Trans i18nKey="about_text" components={{ boldLine: <b></b> }} />
        </p>
      </div>
    </div>
  );
}

export default About;
