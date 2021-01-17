import { Component } from "react";
import logo from "../images/logo.png";
import headerStyles from "../styles/Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={headerStyles.header}>
        <div id={headerStyles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
            <li className={headerStyles.list}>Home </li>
            <li className={headerStyles.list}> Contact Us</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
