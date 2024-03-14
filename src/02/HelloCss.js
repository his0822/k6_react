import logo from "./hello_remove.png";
import "../02/HelloCss.css";
import HelloWhite from "./HelloWhite";
import HelloYellow from "./HelloYellow";

export default function HelloCss() {
const apikey = process.env.REACT_APP_MV_API;
console.log(apikey);

  return (
    <div className="hellomain">
      <div>
        <img className="imgLogo" src={logo} alt="logo" />
      </div>
      <HelloWhite />
      <br />
      <HelloYellow />
    </div>
  );
}
