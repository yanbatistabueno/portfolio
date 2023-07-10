import "./LinksButton.css";
function LinksButton(props) {
  return (
    <li className="links-icon">
      <img src={props.image} />
    </li>
  );
}

export default LinksButton;
