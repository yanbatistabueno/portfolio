import "./LinksButton.css";
function LinksButton(props) {
  function showAfter(e) {
    console.log(e.target.children[1]);
    e.target.children[1].innerText = props.name;
    console.log(props);
  }
  return (
    <li onMouseEnter={showAfter} className="links-icon">
      <img src={props.image} />
      <div className="link-name"></div>
    </li>
  );
}

export default LinksButton;
