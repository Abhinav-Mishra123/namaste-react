import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="main-header">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img src={LOGO_URL} width={100}></img>
        </Link>
      </div>
      <div className="navmenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
