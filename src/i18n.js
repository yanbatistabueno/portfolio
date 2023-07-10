import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n

  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources: {
      en: {
        translation: {
          English: "English - US",
          "Change Languague": "Change Language",
          About: "About",
          Projects: "Projects",
          "Hi, I'm Yan!": "Hi, I'm Yan!",
          "Front-End Developer": "Front-End Developer",
          Languages: "Languages",
          "EN Fluent": "EN Fluent",
          "PT-BR Native Speaker": "PT-BR Native Speaker",
          "Contact Me": "Contact Me",
          "Brazil - São Paulo": "Brazil - São Paulo",
          "ABOUT ME": "ABOUT ME",
          about_title:
            "An dedicated Front-end Developer. <nextLine /> Raised in São Paulo, Brazil 📍",
          about_text:
            "As a Junior Front-End Developer, I wield a robust skill set encompassing <boldLine> HTML</boldLine>,<boldLine> CSS</boldLine>,<boldLine> JavaScript</boldLine> and <boldLine> React</boldLine>. My proficiency lies in creating and maintaining responsive websites that deliver seamless user experiences. I specialize in crafting dynamic and captivating interfaces by employing clean, optimized code and leveraging state-of-the-art development tools and methodologies.",
        },
      },
      "pt-BR": {
        translation: {
          English: "Português - BR",
          "Change Languague": "Mudar idioma",
          About: "Sobre",
          Projects: "Projetos",
          "Hi, I'm Yan!": "Oi, sou Yan!",
          "Front-End Developer": "Desenvolvedor Front-End",
          Languages: "Idiomas",
          "EN Fluent": "Fluente em Inglês",
          "PT-BR Native Speaker": "PT-BR Língua Nativa",
          "Contact Me": "Contatos",
          "Brazil - São Paulo": "São Paulo - Brasil",
          "ABOUT ME": "SOBRE MIM",
          about_title:
            "Um desenvolvedor Front-End dedicado. <nextLine /> Ambientado na capital de São Paulo - Brasil 📍",
          about_text:
            "Como um desenvolvedor Front-End, eu exerço um vasto conhecimento e habilidades em <boldLine> HTML</boldLine>,<boldLine> CSS</boldLine>,<boldLine> JavaScript</boldLine> e <boldLine> React</boldLine>. Minha proeza vem em criar e manter websites responsivos que entregam uma experiência de usuário impecável. Eu me especializo em criar interfaces dinâmicas e cativantes por uma implementação de códigos limpos, otimizados e utilizando ferramentas e metodologias de desenvolvimento de última geração.",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
