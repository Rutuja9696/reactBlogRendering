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
      </div>
    );
  }
}

export default Header;
