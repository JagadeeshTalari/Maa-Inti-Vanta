import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <h5 className="footer-logo">Maa inti vanta</h5>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mob-app")}
          className={menu === "mob-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className={"dot"}></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
}
export default Navbar;
