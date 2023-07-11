import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useTranslation } from "react-i18next";
import i18next, { changeLanguage } from "i18next";
import React, { Suspense } from "react";
import Header from "./assets/components/Header";
import MainCard from "./assets/components/MainCard";
import Language from "./assets/components/Language";
import About from "./assets/components/About";

function App() {
  const { t, i18n } = useTranslation();
  const [windowWidth, setWindowWidht] = useState(window.innerWidth);
  let [visibiility, setVisibility] = useState(false);
  let [navVisible, setNavVisible] = useState(false);
  function changeNavVisible(e) {
    console.log(e.target);
    if (window.matchMedia("(max-width: 729px)").matches) {
      setNavVisible((prevNavVisible) => !prevNavVisible);
    }
    if (e.target.innerHTML == "Home") {
      window.scrollTo(0, 0);
    }
  }

  function viewPort() {
    const inViewport = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
  }

  viewPort();

  useEffect(() => {
    if (window.matchMedia("(max-width: 729px)").matches) {
      setVisibility(true);
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (windowWidth < 729) {
        setVisibility(true);
      } else if (windowWidth > 729) {
        setVisibility(false);
      }

      setWindowWidht((prevWindow) => window.innerWidth);
      console.log(visibiility);
    });
  }, [windowWidth]);
  return (
    <>
      <Suspense fallback="loading">
        <Header
          navVisibility={navVisible}
          click={changeNavVisible}
          visible={visibiility}
        />
        <MainCard />
        <About />
        <About />
        <About />
        <Language />
      </Suspense>
    </>
  );
}

export default App;
