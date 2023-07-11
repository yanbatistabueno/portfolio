import "./MainCard.css";
import HeroCard from "./HeroCard";
import SectionCard from "./SectionCard";
function MainCard() {
  return (
    <main id="main">
      <HeroCard data={"scale-in"} />
      <SectionCard data={"scale-out"} />
    </main>
  );
}

export default MainCard;
