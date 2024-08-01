import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="main-header">
      <div className="logo-container">
        <a href="">
          {" "}
          <img src={LOGO_URL} width={100}></img>
        </a>
      </div>
      <div className="navmenu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Contact us</a>
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
