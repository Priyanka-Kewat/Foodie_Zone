import { LOGO } from "../util/constants";

const Header = () => {
  return (
    <div className="Header-Top">
      <div className="rest-logo">
        <img src={LOGO} alt="logo not render" height={"100%"} width={"100%"} />
      </div>
      <div>
        <ul className="Menus">
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
