import { useTranslation } from "react-i18next";
import "./Language.css";
function Language(props) {
  const { t, i18n } = useTranslation();
  return <div className="language-text">{t("English")}</div>;
}

export default Language;
