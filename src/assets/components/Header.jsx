import "./Header.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "i18next";
function Header(props) {
  let styles = {
    opacity: props.navVisibility ? "1" : "0",
    transition: "opacity 0.15s",
  };

  const { t, i18n } = useTranslation();

  function goTop() {
    window.scrollTo(0, 0);
  }

  function mudarIdioma(e) {
    i18n.changeLanguage(e.target.name);
  }

  return (
    <header>
      <button onClick={goTop} className="site-title">
        YanBatista.dev
      </button>
      {props.visible && (
        <button className="hamburguer-button" onClick={props.click}>
          <img
            src={`src/home/${
              props.navVisibility ? `close-menu.png` : `hamburguer-menu.png`
            }`}
            alt=""
          />
        </button>
      )}

      <nav style={styles}>
        {props.navVisibility && <a onClick={props.click}>Home</a>}
        {props.navVisibility && (
          <a onClick={props.click} href="#about-container">
            {t("About")}
          </a>
        )}
        {props.navVisibility && (
          <a onClick={props.click} href="#projects">
            {t("Projects")}
          </a>
        )}
        {props.navVisibility && (
          <div className="languages-container">
            <img
              className="language-buttons"
              name="pt-BR"
              onClick={mudarIdioma}
              src="src/home/br-flag.png"
            />

            <img
              className="language-buttons"
              name="en"
              onClick={mudarIdioma}
              src="src/home/us-flag.png"
            />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
