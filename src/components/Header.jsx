import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import userContext from "../utils/userContext";
import { useContext } from "react";
const Header = () => {

  const data = useContext(userContext);

  return (
    <div className="main-header">
      <div className="logo-container">
        <a href="">
          {" "}
          <img src={LOGO_URL} width={100}></img>
        </a>
      </div>
      {data}
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
