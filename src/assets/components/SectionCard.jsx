import "./SectionCard.css";
import { useTranslation } from "react-i18next";
function SectionCard(props) {
  const { t, i18n } = useTranslation();
  return (
    <section data-inviewport={"scale-out"}>
      <h2>{t("Languages")}</h2>
      <div className="section-containers">
        <img src="src/home/us-flag.png" />
        <p>{t("EN Fluent")}</p>
      </div>
      <div className="section-containers">
        <img src="src/home/br-flag.png" />
        <p>{t("PT-BR Native Speaker")}</p>
      </div>
      <h2>{t("Contact Me")}</h2>
      <div className="section-containers">
        <img src="src/home/email-icon.png" />
        <p>yanbatista2704@gmail.com</p>
      </div>
      <div className="section-containers">
        <img src="src/home/whatsApp-icon.png" />
        <p>(11) 99172-3486</p>
      </div>
      <div className="section-containers">
        <img src="src/home/mapPointer-icon.png" />
        <p>{t("Brazil - São Paulo")}</p>
      </div>
      <div className="section-containers">
        <button>
          <a href="https://github.com/yanbatistabueno" target="_blank">
            <img src="src/home/git-icon.png" alt="" />
          </a>
        </button>
      </div>
    </section>
  );
}

export default SectionCard;
