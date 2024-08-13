import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import UserContext from "../utils/userContext";
import { useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ThemeSwitcher } from "../utils/darkMode";
import { useSelector } from "react-redux/dist/react-redux";

const Header = () => {

  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

const cartItems = useSelector((store)=> store.cart.items);
console.log(cartItems);

  return (
    <div className="main-header">
      <div className="logo-container">
        <a href="">
          {" "}
          <img src={LOGO_URL} width={100}></img>
        </a>
      </div>
      <h4>User : {loggedInUser} </h4>
      {/* <ThemeSwitcher /> */}
      <div className="navmenu">
        <ul>
        {/* <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
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
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
