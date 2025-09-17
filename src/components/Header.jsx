import { LOGO } from "../util/constants";
import { Link } from "react-router";
import React from "react";

const Header = () => {
  return (
    <div className="Header-Top">
      <div className="rest-logo">
        <img src={LOGO} alt="logo not render" height={"100%"} width={"100%"} />
      </div>
      <div>
        <ul className="Menus">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact US</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
