import "./MainCard.css";
import HeroCard from "./HeroCard";
import SectionCard from "./SectionCard";

function MainCard(props) {
  return (
    <main data-inviewport={"seeing"} id="main">
      <HeroCard />
      <SectionCard />
    </main>
  );
}

export default MainCard;
